import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { submitToGoogleSheets, FormData } from '@/lib/googleSheets';

const WelcomeForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: ''
  });

  // Show popup after 2 seconds of page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName.trim()) {
      toast({ title: 'Please enter your full name.' });
      return;
    }
    
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      toast({ title: 'Please enter a valid 10-digit phone number.' });
      return;
    }
    
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      toast({ title: 'Please enter a valid Indian mobile number starting with 6, 7, 8, or 9.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const dataToSubmit: FormData = {
        fullName: formData.fullName.trim(),
        phone: cleanPhone,
        email: '',
        message: 'Welcome popup enquiry - Interested in Max Estate 128',
        source: 'Welcome Popup Form',
        timestamp: new Date().toISOString()
      };

      const success = await submitToGoogleSheets(dataToSubmit);
      
      if (success) {
        setFormData({ fullName: '', phone: '' });
        setIsOpen(false);
        navigate('/thank-you');
      } else {
        toast({ 
          title: 'Submission failed', 
          description: 'Please try again or contact us directly.' 
        });
      }
    } catch (error) {
      toast({ 
        title: 'Error occurred', 
        description: 'Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] p-3 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-sm sm:max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors p-1 z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header with Branding */}
        <div className="bg-gradient-to-r from-navy-deep to-navy-light text-white p-4 sm:p-6 rounded-t-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-rich to-gold-light rounded-lg flex items-center justify-center shadow-md">
              <img src="/logo.png" alt="Max Estates" className="h-6 w-auto" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Welcome to Max Estate 128</h2>
              <p className="text-gold-light text-sm">Luxury Living Redefined</p>
            </div>
          </div>
          <p className="text-gray-light text-sm leading-relaxed">
            Get exclusive access to premium residential development in Noida. 
            Enter your details for personalized consultation.
          </p>
        </div>

        {/* Form Content */}
        <div className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <Input
                value={formData.fullName}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                  handleInputChange('fullName', value);
                }}
                placeholder="Enter your full name"
                className="w-full h-10 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <div className="flex items-center rounded-lg overflow-hidden border border-gray-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30 transition-all duration-200">
                <span className="px-3 py-2 bg-gray-100 text-gray-600 flex items-center gap-2 whitespace-nowrap border-r border-gray-300">
                  <span className="text-sm font-semibold">+91</span>
                </span>
                <Input
                  type="tel"
                  inputMode="numeric"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                    handleInputChange('phone', value);
                  }}
                  placeholder="9876543210"
                  className="border-0 focus-visible:ring-0 flex-1 h-10 text-sm"
                  maxLength={10}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1 h-10 text-sm"
                disabled={isSubmitting}
              >
                Maybe Later
              </Button>
              <Button
                type="submit"
                className="flex-1 text-black h-10 text-sm"
                style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f5e08a 50%, #d4af37 100%)' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get Details'}
              </Button>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>No Spam</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeForm;
