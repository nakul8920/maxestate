import { useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEnquire } from '@/contexts/EnquireContext';
import OptimizedImage from '@/components/ui/optimized-image';

type Plan = {
  title: string;
  subtitle?: string;
  image: string;
  description: string;
  highlights: string[];
};

const FloorPlans = () => {
  const { openEnquireForm } = useEnquire();
  const plans: Plan[] = useMemo(
    () => [
      {
        title: 'Typology 1 — 4 BHK Signature',
        subtitle: 'Effortless flow, expansive living',
        image: '/floor-plans/estate-128-typology-1.jpg',
        description: 'A balanced 4 BHK layout crafted for daily comfort and entertaining. The living and dining seamlessly connect to a generous deck, bringing light and views into the heart of the home.',
        highlights: [
          'Optimized family zoning',
          'Wrap-around viewing deck',
          'Dual-aspect living + dining',
          'Dedicated utility and store',
        ],
      },
      {
        title: 'Typology 2 — 4 BHK Premium Corner',
        subtitle: 'Light-filled corner layout',
        image: '/floor-plans/estate-128-typology-2.jpg',
        description: 'Corner residence with expansive glazing and natural cross-ventilation. Private bedroom wing and a spacious entertaining core deliver both privacy and presence.',
        highlights: [
          'Zoned privacy across bedrooms',
          'Primary suite with walk-in',
          'Wide glazing for natural light',
          'Separate staff access',
        ],
      },
      {
        title: 'Typology 3 — 5 BHK Sky Collection',
        subtitle: 'Grand scale for entertaining',
        image: '/floor-plans/estate-128-typology-3.jpg',
        description: 'A statement 5 BHK home designed for grand gatherings. Dual lounges, paired kitchens, and extended decks create a remarkable indoor–outdoor living experience.',
        highlights: [
          'Formal + family lounges',
          'Chef’s + wet kitchen pairing',
          'Two-side deep-view decks',
          'Premium fittings throughout',
        ],
      },
      {
        title: 'Typology 4 — 5 BHK Presidential',
        subtitle: 'Panoramic corner residence',
        image: '/floor-plans/estate-128-typology-4.jpg',
        description: 'Presidential corner plan with a private foyer and all en-suite bedrooms. A versatile study/media bay adds flexibility for work or leisure.',
        highlights: [
          'Private foyer entry',
          'All bedrooms en-suite',
          'Flexible study / media bay',
          'Signature bath experience',
        ],
      },
    ],
    []
  );

  return (
    <section id="floorplans" className="py-12 bg-background relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" aria-hidden>
        <div className="h-full w-full" style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, hsla(var(--gold-light)/0.6) 0px, transparent 300px), radial-gradient(circle at 80% 30%, hsla(var(--navy-light)/0.5) 0px, transparent 260px)'
        }}></div>
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">
            <span>Curated Residences</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Max Estate 128</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
            Floor <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Plans</span>
          </h2>
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <span className="h-px w-10 bg-muted" />
            <p className="text-lg">Thoughtfully planned layouts for modern luxury living</p>
            <span className="h-px w-10 bg-muted" />
          </div>
        </div>

        {/* Featured plan - larger image and clear description */}
        <div className="max-w-7xl mx-auto mb-12">
          {plans[0] && (
            <Card className="overflow-hidden border-0 shadow-luxury bg-white/80 backdrop-blur-md">
              <div className="grid md:grid-cols-2">
                <div className="p-6 md:p-8 bg-gradient-to-br from-navy-deep to-navy-light flex items-center justify-center md:order-2">
                  <div className="relative w-full h-[320px] md:h-[420px] rounded-xl overflow-hidden bg-white ring-1 ring-white/20 shadow-md">
                    <OptimizedImage
                      src={plans[0].image}
                      alt={plans[0].title}
                      className="w-full h-full object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/85 text-navy-deep shadow">
                      Featured Plan
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 h-full flex flex-col md:order-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">{plans[0].title}</h3>
                      {plans[0].subtitle && (
                        <p className="text-sm md:text-base text-gray-elegant mt-1">{plans[0].subtitle}</p>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                      Premium
                    </span>
                  </div>
                  {plans[0].description && (
                    <p className="text-sm md:text-base text-muted-foreground mb-5 leading-relaxed">{plans[0].description}</p>
                  )}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {plans[0].highlights.map((h, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/70"/>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    <Button 
                      className="hover:shadow-luxury text-black" 
                      style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f5e08a 50%, #d4af37 100%)' }}
                      onClick={() => window.open('https://wa.me/917303665082?text=Hi, I am interested in downloading the floor plan for Max Estate 128. Please provide more details.', '_blank')}
                    >
                      Download Plan
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-transparent hover:text-primary"
                      onClick={() => openEnquireForm('Floor Plans - Typology 1')}
                    >
                      Enquire
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Remaining plans grid */}
        <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
          {plans.slice(1).map((plan, idx) => {
            const label = plan.title.split('—')[0].trim();
            const isReversed = idx % 2 === 1;
            return (
              <Card key={`${plan.title}-${idx}`} className={`overflow-hidden border-0 bg-white/85 backdrop-blur-md shadow-soft hover:shadow-luxury transition-all duration-300`}>
                <div className={`grid md:grid-cols-2 ${isReversed ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}>
                  <div className="p-6 md:p-8 bg-gradient-to-br from-navy-deep to-navy-light flex items-center justify-center">
                    <div className="relative w-full h-[300px] md:h-[360px] rounded-xl overflow-hidden bg-white ring-1 ring-white/20 shadow-md">
                      <img
                        src={plan.image}
                        alt={plan.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/placeholder.svg';
                        }}
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20">
                        {label}
                        <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] border border-white/20">#{(idx + 2).toString().padStart(2, '0')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{plan.title}</h3>
                        {plan.subtitle && (
                          <p className="text-sm text-gray-elegant mt-1">{plan.subtitle}</p>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                        Premium
                      </span>
                    </div>
                    {plan.description && (
                      <p className="text-sm md:text-base text-muted-foreground mb-5 leading-relaxed">{plan.description}</p>
                    )}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {plan.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap items-center gap-3">
                      <Button 
                        className="hover:shadow-luxury text-black" 
                        style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f5e08a 50%, #d4af37 100%)' }}
                        onClick={() => window.open('https://wa.me/917303665082?text=Hi, I am interested in downloading the floor plan for Max Estate 128. Please provide more details.', '_blank')}
                      >
                        Download Plan
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-transparent hover:text-primary"
                        onClick={() => openEnquireForm(`Floor Plans - ${plan.title}`)}
                      >
                        Enquire
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;


