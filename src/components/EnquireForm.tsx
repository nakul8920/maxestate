import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { submitToGoogleSheets, FormData } from '@/lib/googleSheets';

interface EnquireFormProps {
  isOpen: boolean;
  onClose: () => void;
  source: string; // Where the form was triggered from
}

const EnquireForm = ({ isOpen, onClose, source }: EnquireFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: ''
  });

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
        message: `Enquiry from ${source}`,
        source: source,
        timestamp: new Date().toISOString()
      };

      const success = await submitToGoogleSheets(dataToSubmit);
      
      if (success) {
        setFormData({ fullName: '', phone: '' });
        onClose();
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-navy-deep">Enquire Now</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

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
                className="w-full"
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
                  className="border-0 focus-visible:ring-0 flex-1"
                  maxLength={10}
                  required
                />
              </div>
            </div>


            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 text-black"
                style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f5e08a 50%, #d4af37 100%)' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquireForm;
