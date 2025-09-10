import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/optimized-image';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/banner-images.jpg"
          alt="Max Estate 128 - Luxury Living"
          className="w-full h-full object-cover"
          priority={true}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-light/70 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-white w-full">
        <div className="max-w-3xl lg:max-w-4xl text-center sm:text-left">
          <div className="mb-3 sm:mb-4">
            <span 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wide bg-clip-text text-transparent drop-shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, rgb(212, 175, 55) 0%, rgb(245, 224, 138) 50%, rgb(212, 175, 55) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Max Estate 128
            </span>
          </div>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
            Luxury Living
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Redefined
            </span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 text-gray-light leading-relaxed">
            Experience the pinnacle of luxury at Max Estate 128, Noida. Where wellness meets 
            sophistication in our ultra-premium residential development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 mb-4 sm:mb-8 max-w-64 sm:max-w-none mx-auto sm:mx-0">
            <Button 
              size="default" 
              className="hover:shadow-luxury text-xs sm:text-base px-3 sm:px-6 py-1.5 sm:py-3 text-black w-full sm:w-auto"
              style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f5e08a 50%, #d4af37 100%)' }}
              onClick={scrollToAbout}
            >
              About us
            </Button>
            <Button 
              size="default" 
              variant="outline" 
              className="border-white hover:bg-white hover:text-navy-deep text-xs sm:text-base px-3 sm:px-6 py-1.5 sm:py-3 w-full sm:w-auto"
              style={{ color: 'black' }}
              onClick={() => window.open('https://wa.me/917303665082?text=Hi, I am interested in scheduling a site visit for Max Estate 128. Please provide more details.', '_blank')}
            >
              Schedule Visit
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-5 text-center max-w-64 sm:max-w-none mx-auto sm:mx-0">
            <div className="p-1.5 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-sm sm:text-xl font-bold text-primary-glow mb-1">10 Acres</div>
              <div className="text-xs text-gray-light">Ultra-Luxury Development</div>
            </div>
            <div className="p-1.5 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-sm sm:text-xl font-bold text-primary-glow mb-1">80%+</div>
              <div className="text-xs text-gray-light">Open Green Space</div>
            </div>
            <div className="p-1.5 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-sm sm:text-xl font-bold text-primary-glow mb-1">201</div>
              <div className="text-xs text-gray-light">Premium Units</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;