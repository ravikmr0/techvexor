import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { sendContactEmail, sendAutoReply } from "@/lib/email";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceTitle?: string;
}

export function QuoteDialog({ open, onOpenChange, serviceTitle }: QuoteDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'validation'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (submitStatus === 'validation' || submitStatus === 'error') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setSubmitStatus('validation');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare message with service context
      const messageWithContext = serviceTitle 
        ? `Service Inquiry: ${serviceTitle}\n\n${formData.message || 'No additional message provided.'}`
        : formData.message || 'Quote request submitted.';

      const emailSent = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: messageWithContext,
        projectType: serviceTitle ? `Quote Request - ${serviceTitle}` : 'Quote Request',
      });
      
      if (emailSent) {
        await sendAutoReply(formData.email, formData.name);
        setSubmitStatus('success');
        setFormData({ name: "", email: "", phone: "", message: "" });
        
        // Close dialog after success with delay
        setTimeout(() => {
          onOpenChange(false);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onOpenChange(false);
      setSubmitStatus('idle');
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Request a Quote
          </DialogTitle>
          <DialogDescription>
            {serviceTitle 
              ? `Get a personalized quote for ${serviceTitle}. Fill out the form below and we'll get back to you within 24 hours.`
              : "Fill out the form below to request a quote. We'll get back to you within 24 hours."
            }
          </DialogDescription>
        </DialogHeader>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-green-800 font-medium">Quote request sent!</p>
              <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        )}

        {submitStatus === 'validation' && (
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-yellow-600" />
            <div>
              <p className="text-yellow-800 font-medium">Please fill all required fields</p>
              <p className="text-yellow-700 text-sm">Name, email, and phone are required.</p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <div>
              <p className="text-red-800 font-medium">Failed to send request</p>
              <p className="text-red-700 text-sm">Please try again or contact us directly at hello@techvexor.com</p>
            </div>
          </div>
        )}

        {submitStatus !== 'success' && (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message (Optional)</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project requirements..."
                className="min-h-[100px]"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handleClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <GradientButton
                type="submit"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Submit'
                )}
              </GradientButton>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
