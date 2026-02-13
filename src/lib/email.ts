export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message?: string;
}

// Try Vercel API endpoint first, then fall back to FormSubmit, then mailto
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  // Try Vercel serverless API first (works in production on Vercel)
  try {
    const vercelResult = await sendViaVercelApi(formData);
    if (vercelResult) return true;
  } catch (err) {
    console.warn('Vercel API not available, trying fallback...', err);
  }

  // Fallback: use FormSubmit.co (free, works from client-side, no API key needed)
  try {
    const formSubmitResult = await sendViaFormSubmit(formData);
    if (formSubmitResult) return true;
  } catch (err) {
    console.warn('FormSubmit fallback failed, trying mailto...', err);
  }

  // Final fallback: open mailto link
  try {
    openMailtoFallback(formData);
    return true;
  } catch (err) {
    console.error('All email methods failed:', err);
    return false;
  }
};

// Send via Vercel API endpoint
const sendViaVercelApi = async (formData: ContactFormData): Promise<boolean> => {
  const response = await fetch('/api/send-contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    // Check if we got back HTML (meaning the API route doesn't exist)
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      throw new Error('API endpoint not available (returned HTML)');
    }
    const error = await response.json();
    console.error('Email sending failed:', error);
    return false;
  }

  const result = await response.json();
  return result.ok === true;
};

// Send via FormSubmit.co (free, no API key needed - uses email as endpoint)
const sendViaFormSubmit = async (formData: ContactFormData): Promise<boolean> => {
  const response = await fetch('https://formsubmit.co/ajax/hello@techvexor.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
      _subject: `New Contact Form Submission from ${formData.name}`,
      project_type: formData.projectType || 'Not specified',
      budget: formData.budget || 'Not specified',
      message: formData.message || 'No message provided',
      _template: 'table',
    }),
  });

  if (!response.ok) {
    throw new Error('FormSubmit submission failed');
  }

  const result = await response.json();
  return result.success === 'true' || result.success === true;
};

// Final fallback: open mailto link
const openMailtoFallback = (formData: ContactFormData): void => {
  const subject = encodeURIComponent(`Contact Form: ${formData.name}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${formData.phone || 'Not provided'}\n` +
    `Company: ${formData.company || 'Not provided'}\n` +
    `Project Type: ${formData.projectType || 'Not specified'}\n` +
    `Budget: ${formData.budget || 'Not specified'}\n\n` +
    `Message:\n${formData.message || 'No message'}`
  );
  window.open(`mailto:hello@techvexor.com?subject=${subject}&body=${body}`, '_blank');
};

// Auto-reply is handled by the API endpoint
export const sendAutoReply = async (_userEmail: string, _userName: string): Promise<boolean> => {
  // Auto-reply is sent automatically by the API endpoint when using Vercel
  // For Web3Forms and mailto fallbacks, auto-reply is not applicable
  return true;
};