import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (path: string) => {
    try {
      navigate(path);
    } finally {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white shadow-sm backdrop-blur-md'
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 lg:px-6 py-3 lg:py-4 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={() => goToSection('/')}
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <img src="/logo.png" alt="Max Estates Logo" className="h-8 lg:h-10 w-auto" />
          </button>
        </div>
        
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <button 
            onClick={() => goToSection('/')}
            className="text-navy-deep hover:text-primary transition-colors text-sm lg:text-base"
          >
            Home
          </button>
          <button 
            onClick={() => goToSection('/about')}
            className="text-navy-deep hover:text-primary transition-colors text-sm lg:text-base hidden sm:block"
          >
            About
          </button>
          <button 
            onClick={() => goToSection('/floorplans')}
            className="text-navy-deep hover:text-primary transition-colors text-sm lg:text-base"
          >
            Floor Plan
          </button>
          <button 
            onClick={() => goToSection('/amenities')}
            className="text-navy-deep hover:text-primary transition-colors text-sm lg:text-base"
          >
            Amenities
          </button>
          <button 
            onClick={() => goToSection('/masterplan')}
            className="text-navy-deep hover:text-primary transition-colors text-sm lg:text-base"
          >
            Masterplan
          </button>
          <button 
            onClick={() => goToSection('/pricing')}
            className="text-navy-deep hover:text-primary transition-colors text-sm lg:text-base"
          >
            Pricing
          </button>
        </div>

        <div className="flex items-center space-x-3">
          {/* Phone Number with Popup Animation */}
          <Button 
            variant="default" 
            className="text-sm lg:text-base px-3 lg:px-4 text-black transition-all duration-300 hover:scale-110 hover:shadow-xl transform hover:-translate-y-1" 
            style={{ 
              background: 'linear-gradient(135deg, #d4af37 0%, #f5e08a 50%, #d4af37 100%)',
              animation: 'popup 2s ease-in-out infinite'
            }}
            onClick={() => window.open('tel:7303665082', '_self')}
          >
            📞 7303665082
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-navy-deep" />
            ) : (
              <Menu className="h-6 w-6 text-navy-deep" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <button 
              onClick={() => goToSection('/')}
              className="block w-full text-left text-navy-deep hover:text-primary transition-colors py-2 text-base"
            >
              Home
            </button>
            <button 
              onClick={() => goToSection('/about')}
              className="block w-full text-left text-navy-deep hover:text-primary transition-colors py-2 text-base hidden sm:block"
            >
              About
            </button>
            <button 
              onClick={() => goToSection('/floorplans')}
              className="block w-full text-left text-navy-deep hover:text-primary transition-colors py-2 text-base"
            >
              Floor Plan
            </button>
            <button 
              onClick={() => goToSection('/amenities')}
              className="block w-full text-left text-navy-deep hover:text-primary transition-colors py-2 text-base"
            >
              Amenities
            </button>
            <button 
              onClick={() => goToSection('/masterplan')}
              className="block w-full text-left text-navy-deep hover:text-primary transition-colors py-2 text-base"
            >
              Masterplan
            </button>
            <button 
              onClick={() => goToSection('/pricing')}
              className="block w-full text-left text-navy-deep hover:text-primary transition-colors py-2 text-base"
            >
              Pricing
            </button>
            
            {/* Mobile Phone Button */}
            <div className="pt-3 border-t border-gray-200">
              <Button 
                variant="default" 
                className="w-full text-base px-4 py-3 text-black transition-all duration-300" 
                style={{ 
                  background: 'linear-gradient(135deg, #d4af37 0%, #f5e08a 50%, #d4af37 100%)',
                  animation: 'popup 2s ease-in-out infinite'
                }}
                onClick={() => window.open('tel:7303665082', '_self')}
              >
                📞 7303665082
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;