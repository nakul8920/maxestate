import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-navy-deep to-navy-light text-white py-12 pb-5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
              Max Estates
            </div>
            <p className="text-gray-light mb-6 leading-relaxed">
              Luxury redefined. Experience the pinnacle of premium living with Max Estates' 
              wellness-focused developments across Delhi NCR.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4 text-primary-glow">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-light hover:text-primary-glow transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-light hover:text-primary-glow transition-colors">About Us</a></li>
              <li><a href="/floorplans" className="text-gray-light hover:text-primary-glow transition-colors">Projects</a></li>
              <li><a href="/amenities" className="text-gray-light hover:text-primary-glow transition-colors">Amenities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4 text-primary-glow">Our Projects</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-light hover:text-primary-glow transition-colors">Max Estate 128</a></li>
              <li><a href="#" className="text-gray-light hover:text-primary-glow transition-colors">Max Towers</a></li>
              <li><a href="#" className="text-gray-light hover:text-primary-glow transition-colors">Max House</a></li>
              <li><a href="#" className="text-gray-light hover:text-primary-glow transition-colors">Max Square</a></li>
              <li><a href="#" className="text-gray-light hover:text-primary-glow transition-colors">Estate 360</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-4 text-primary-glow">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-white">Address</div>
                <p className="text-gray-light text-sm">
                  Sector 128, Noida-Greater Noida Expressway,<br/>
                  Uttar Pradesh, 201304
                </p>
              </div>
              <div>
                <div className="font-semibold text-white">Phone</div>
                <p className="text-gray-light">+91 7303665082</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-light text-sm mb-4 md:mb-0">
              © 2025 Max Estates. All rights reserved. | A Max Group Company
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/terms" className="text-gray-light hover:text-primary-glow transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="text-center text-[10px] text-gray-light leading-relaxed">
            <p className="mb-2">
              This project is RERA registered. | Authorized Channel Partner | Project RERA Number : UPRERAPRJ446459
            </p>
            <p className="text-xs">
              Disclaimer: This website is an informational platform managed by a RERA-authorized real estate agent and is not the official project site. The prices, property availability, and images shown are for reference only and may change without prior notice. We may share your information with RERA-registered developers and send updates to your registered email or phone number. All content is protected by copyright and intellectual property laws. For the most accurate and up-to-date information, please contact us directly through the contact details provided.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;