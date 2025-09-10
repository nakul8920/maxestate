import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { submitToGoogleSheets, FormData } from '@/lib/googleSheets';

const CallbackForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!fullName.trim()) {
      toast({ title: 'Please enter your full name.' });
      return;
    }
    
    const cleanPhone = phone.replace(/\D/g, '');
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
        fullName: fullName.trim(),
        phone: cleanPhone,
        email: '',
        message: 'Callback request from sidebar form',
        source: 'Callback Form (Sidebar)',
        timestamp: new Date().toISOString()
      };

      const success = await submitToGoogleSheets(dataToSubmit);
      
      if (success) {
        setFullName('');
        setPhone('');
        navigate('/thank-you');
      } else {
        toast({ title: 'Submission failed', description: 'Please try again or contact us directly.' });
      }
    } catch (error) {
      toast({ title: 'Error occurred', description: 'Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <aside className="fixed right-0 top-0 w-[380px] z-40
      bg-gradient-to-b from-navy-deep via-navy-light/95 to-navy-deep/95 border-l border-gold-light/20 shadow-xl text-white
      hidden lg:block h-screen">
      
      <div className="p-6 flex flex-col justify-between h-full pt-20">
        <div className="flex-1">
          {/* Professional Header with Branding */}
          <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-gold-rich to-gold-light rounded-lg flex items-center justify-center shadow-md">
              <img src="/logo.png" alt="Max Estates" className="h-5 w-auto" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Get Expert Consultation
              </h3>
              <p className="text-xs text-gold-light font-medium">Max Estate 128</p>
            </div>
          </div>
          <p className="text-gray-light text-xs leading-relaxed">
            Connect with our luxury real estate specialists.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-2 mb-4 p-2 bg-white/5 rounded-lg border border-white/10">
          <div className="text-center">
            <div className="text-base font-bold text-gold-light">30min</div>
            <div className="text-xs text-gray-light">Response</div>
          </div>
          <div className="text-center">
            <div className="text-base font-bold text-gold-light">24/7</div>
            <div className="text-xs text-gray-light">Support</div>
          </div>
          <div className="text-center">
            <div className="text-base font-bold text-gold-light">100%</div>
            <div className="text-xs text-gray-light">Private</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-semibold text-white/90 mb-1">
              Full Name *
            </label>
            <Input
              value={fullName}
              onChange={(e) => {
                const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                setFullName(value);
              }}
              placeholder="Enter your full name"
              className="h-9 bg-white/10 text-white placeholder-white/60 border-white/20 focus:border-gold-light focus:ring-gold-light/30 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white/90 mb-1">
              Phone Number *
            </label>
            <div className="flex items-center rounded-lg overflow-hidden border border-white/20 focus-within:border-gold-light focus-within:ring-2 focus-within:ring-gold-light/30 transition-all duration-200">
              <span className="px-2 py-2 bg-white/5 text-gold-light flex items-center gap-1 whitespace-nowrap border-r border-white/10">
                <span className="text-xs font-semibold">+91</span>
              </span>
              <Input
                type="tel"
                inputMode="numeric"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                  setPhone(value);
                }}
                placeholder="9876543210"
                className="border-0 focus-visible:ring-0 h-9 bg-transparent text-white placeholder-white/60"
                maxLength={10}
              />
            </div>
            <p className="text-xs text-gray-light mt-1 flex items-center gap-1">
              <span className="text-green-500">✓</span>
              India numbers only. We respect your privacy.
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full text-black font-semibold h-9 transition-all duration-200 shadow-md hover:shadow-lg mb-2"
            style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f5e08a 50%, #d4af37 100%)' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
          </Button>

          {/* WhatsApp Button */}
          <Button 
            type="button"
            onClick={() => window.open('https://wa.me/917303665082?text=Hi, I am interested in Max Estate 128. Please provide more details.', '_blank')}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 
                     text-white font-semibold h-9 transition-all duration-200 shadow-md hover:shadow-lg
                     flex items-center justify-center gap-2"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Connect on WhatsApp
          </Button>

        </form>
        </div>
        
        {/* Professional Footer */}
        <div className="pt-3 pb-4 border-t border-gray-200">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-light mb-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Live Support Available</span>
          </div>
          <p className="text-xs text-gray-light text-center leading-relaxed">
            By submitting, you agree to receive updates about Max Estate 128 luxury properties. 
            <span className="text-gold-light font-medium"> No spam, ever.</span>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default CallbackForm;


