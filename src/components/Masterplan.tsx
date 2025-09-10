import { Card } from '@/components/ui/card';
import OptimizedImage from '@/components/ui/optimized-image';

const Masterplan = () => {
  return (
    <section id="masterplan" className="py-12 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">
            Site Overview
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Masterplan
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
            Master<span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A thoughtfully orchestrated layout with green corridors, recreational zones, and seamless circulation.
          </p>
        </div>

        <Card className="overflow-hidden bg-white/85 backdrop-blur-md shadow-luxury">
          <div className="bg-gradient-to-br from-navy-deep to-navy-light p-2 md:p-3">
            <div className="relative w-full h-[500px] sm:h-[600px] md:h-[720px] rounded-xl overflow-hidden bg-white ring-1 ring-white/20 shadow-md">
              <OptimizedImage
                src="/masterplan/estate-128-typology-new-5.jpg"
                alt="Masterplan Overview"
                className="w-full h-full object-contain"
                sizes="100vw"
              />
            </div>
          </div>
          <div className="px-6 py-6 md:px-8 md:py-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Thoughtfully Designed <span className="text-primary">Community</span>
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  The masterplan integrates architecture, landscape and wellness into a seamless environment. 
                  A green central spine connects recreational amenities while intuitive circulation ensures 
                  effortless movement across residences and open spaces.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group p-5 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-muted/60 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-foreground text-lg">Green Spine</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Central landscape promenade connecting leisure courts, kids' play areas and serene gardens for community interaction.</p>
                </div>

                <div className="group p-5 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-muted/60 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-foreground text-lg">Smart Circulation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Intuitive vehicular loops, safe pedestrian walkways and weather-protected drop-off zones for seamless movement.</p>
                </div>

                <div className="group p-5 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-muted/60 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-foreground text-lg">Recreation Zones</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Strategic placement of outdoor fitness areas, sports courts and social pavilions for active community living.</p>
                </div>

                <div className="group p-5 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-muted/60 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-foreground text-lg">Privacy & Security</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Controlled access points, clear sightlines and strategic landscape buffers ensuring resident privacy and safety.</p>
                </div>

                <div className="group p-5 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-muted/60 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-foreground text-lg">Wellness Focus</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Maximized natural daylight, cross-ventilation and serene green views from every residence for holistic living.</p>
                </div>

                <div className="group p-5 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-muted/60 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-foreground text-lg">Future-Ready</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">EV charging zones, smart infrastructure and adaptable community spaces designed for evolving needs.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Masterplan;