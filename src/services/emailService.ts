import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface SendEmailResult {
  success: boolean;
  message?: string;
  error?: string;
  isConfigMissing?: boolean;
}

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  targetEmail: 'dahamsividara@gmail.com',
};

/**
 * Validates if the required client-side EmailJS environment variables are configured.
 */
export const isEmailServiceConfigured = (): boolean => {
  return Boolean(
    EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.templateId &&
    EMAILJS_CONFIG.publicKey &&
    EMAILJS_CONFIG.serviceId !== 'your_service_id_here' &&
    EMAILJS_CONFIG.templateId !== 'your_template_id_here' &&
    EMAILJS_CONFIG.publicKey !== 'your_public_key_here'
  );
};

/**
 * Validates the contact form inputs client-side before sending.
 */
export const validateContactForm = (data: ContactFormData): { isValid: boolean; errors: ValidationErrors } => {
  const errors: ValidationErrors = {};
  const trimmedName = data.name.trim();
  const trimmedEmail = data.email.trim();
  const trimmedMessage = data.message.trim();

  // Validate Name (minimum 2 characters)
  if (!trimmedName) {
    errors.name = 'Please enter your name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  // Validate Email (standard email regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address (e.g. name@domain.com).';
  }

  // Validate Message (minimum 10 characters)
  if (!trimmedMessage) {
    errors.message = 'Please enter your message.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Securely dispatches the contact email via EmailJS browser SDK.
 * Only public credentials (VITE_EMAILJS_PUBLIC_KEY) are used client-side.
 */
export const sendContactEmail = async (data: ContactFormData): Promise<SendEmailResult> => {
  // 1. Check if EmailJS configuration is present in environment
  if (!isEmailServiceConfigured()) {
    return {
      success: false,
      isConfigMissing: true,
      error:
        'Email service configuration is not yet set in .env. Please configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.',
    };
  }

  // 2. Client-side input validation
  const validation = validateContactForm(data);
  if (!validation.isValid) {
    const firstError = Object.values(validation.errors)[0];
    return {
      success: false,
      error: firstError || 'Please correct the highlighted fields before submitting.',
    };
  }

  try {
    const templateParams = {
      from_name: data.name.trim(),
      from_email: data.email.trim(),
      reply_to: data.email.trim(),
      subject: data.subject.trim() || `Inquiry from ${data.name.trim()}`,
      message: data.message.trim(),
      to_email: EMAILJS_CONFIG.targetEmail,
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you! Your message has been sent directly to Risadi Vidara.',
      };
    } else {
      return {
        success: false,
        error: `Delivery service responded with status ${response.status}. Please try again later.`,
      };
    }
  } catch (err: unknown) {
    let errorMessage = 'An unexpected error occurred while sending your message.';
    if (err && typeof err === 'object') {
      if ('text' in err && typeof (err as { text: unknown }).text === 'string') {
        errorMessage = (err as { text: string }).text;
      } else if ('message' in err && typeof (err as { message: unknown }).message === 'string') {
        errorMessage = (err as { message: string }).message;
      }
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
};
