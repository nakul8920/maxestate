import { Card, CardContent } from '@/components/ui/card';
import amenitiesImage from '@/assets/amenities.jpg';
import heroBuildingImage from '@/assets/hero-building.jpg';
import maxTowersImage from '@/assets/max-towers.jpg';
import OptimizedImage from '@/components/ui/optimized-image';

const Amenities = () => {
  const amenitiesList = [
    { 
      number: '01',
      title: 'Swimming Pool', 
      description: 'Olympic-size pool with deck area',
      highlight: 'Olympic Size'
    },
    { 
      number: '02',
      title: 'Modern Gymnasium', 
      description: 'State-of-the-art fitness equipment',
      highlight: 'Premium Equipment'
    },
    { 
      number: '03',
      title: 'Landscaped Gardens', 
      description: 'Beautifully designed green spaces',
      highlight: 'Eco-Friendly'
    },
    { 
      number: '05',
      title: 'Jogging Track', 
      description: 'Dedicated running & walking paths',
      highlight: 'Fitness Focus'
    },
    { 
      number: '06',
      title: 'Children\'s Play Area', 
      description: 'Safe & fun play zones for kids',
      highlight: 'Child Safe'
    },
    { 
      number: '07',
      title: 'Clubhouse', 
      description: 'Exclusive resident clubhouse',
      highlight: 'Exclusive Access'
    },
    { 
      number: '08',
      title: '24x7 Security', 
      description: 'CCTV surveillance & security',
      highlight: 'Round Clock'
    }
  ];

  return (
    <section id="amenities" className="py-12 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            World-Class <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Amenities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience luxury living with our comprehensive range of premium amenities 
            designed for your comfort and convenience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <OptimizedImage
              src={amenitiesImage}
              alt="Luxury Amenities at Max Estate 128"
              className="rounded-lg shadow-luxury w-full h-[500px] object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-navy-deep">Premium Lifestyle Features</h3>
            <p className="text-lg text-gray-elegant mb-8 leading-relaxed">
              Our 46,000 sq ft amenity hub offers unparalleled luxury and convenience. 
              From wellness facilities to recreational spaces, every detail is designed 
              to enhance your living experience.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-soft">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-bold">
                  46K
                </div>
                <div>
                  <div className="font-bold text-navy-deep">Amenity Hub</div>
                  <div className="text-gray-elegant">Sq ft of luxury facilities</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-soft">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-bold">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-navy-deep">Wellness Focus</div>
                  <div className="text-gray-elegant">Health & wellness amenities</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            {amenitiesList.map((amenity, index) => {
              const imageByAmenityTitle: Record<string, string> = {
                'Swimming Pool': '/amenities/swimming-pool.jpeg',
                'Modern Gymnasium': '/amenities/gym.jpg',
                'Landscaped Gardens': '/amenities/gardens.jpg',
                'Amphitheater': '/amenities/amphitheater.jpg',
                'Jogging Track': '/amenities/jogging.jpg',
                "Children's Play Area": '/amenities/play-area.jpg',
                'Clubhouse': '/amenities/clubhouse.jpg',
                '24x7 Security': '/amenities/security.jpg',
              };
              const imageFallbackPool = [
                '/banner-images.jpg',
                amenitiesImage,
                heroBuildingImage,
                maxTowersImage,
                '/masterplan/estate-128-typology-new-5.jpg',
              ];
              const fallbackSrc = imageFallbackPool[index % imageFallbackPool.length];
              const imageSrc = imageByAmenityTitle[amenity.title] || fallbackSrc;
              return (
                <div key={`${amenity.title}-${index}`} className="w-64 md:w-72 lg:w-72 mr-4 md:mr-6 flex-shrink-0">
                  <div className="relative h-64 overflow-visible rounded-2xl bg-white p-4 border border-gray-100 flex flex-col">
                    <div className="relative w-full h-24 rounded-lg overflow-hidden ring-1 ring-black/5 mb-3">
                      <OptimizedImage
                        src={imageSrc}
                        alt={amenity.title}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-[11px] font-semibold mb-1">
                      <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">{amenity.highlight}</span>
                    </div>
                    <h4 className="text-lg font-bold text-navy-deep leading-snug mb-1">{amenity.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">{amenity.description}</p>
                    <div className="mt-auto h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>Max Estate 128</span>
                      <span className="inline-flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                        Premium Amenity
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-navy-deep to-navy-light text-white">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Premium Finishes & Quality</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-primary-glow mb-2">Flooring</h4>
                  <p className="text-gray-light">Laminated wooden flooring in bedrooms, vitrified tiles in living areas</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary-glow mb-2">Structure</h4>
                  <p className="text-gray-light">RCC frame structure with premium bath fittings</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary-glow mb-2">Finishes</h4>
                  <p className="text-gray-light">Oil-bound distemper walls and high-end interiors</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Amenities;