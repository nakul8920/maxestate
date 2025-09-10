import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import maxTowersImage from '@/assets/max-towers.jpg';
import OptimizedImage from '@/components/ui/optimized-image';

const About = () => {
  // Reveal on scroll
  if (typeof window !== 'undefined') {
    const run = () => {
      const section = document.getElementById('about');
      if (!section) return;
      const reveal = () => section.classList.add('reveal-in');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );
      section.classList.add('reveal-init');
      observer.observe(section);
    };
    // Use requestAnimationFrame to ensure DOM is ready after mount
    requestAnimationFrame(run);
  }

  return (
    <section id="about" className="py-12 bg-gradient-elegant relative overflow-hidden hidden sm:block">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden>
        <div className="h-full w-full" style={{
          backgroundImage: 'radial-gradient(circle at 30% 20%, hsla(var(--gold-light)/0.4) 0px, transparent 400px), radial-gradient(circle at 70% 80%, hsla(var(--navy-light)/0.3) 0px, transparent 350px)'
        }}></div>
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span>Established 2016</span>
            <span className="w-2 h-2 rounded-full bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Max Estates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The real estate development arm of Max Group, delivering high-quality, sustainable developments 
            across Delhi NCR with a focus on wellness-focused design and premium living experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-navy-deep">
                WorkWell <span className="text-primary">Philosophy</span>
              </h3>
              <p className="text-lg text-gray-elegant mb-6 leading-relaxed">
                Our signature "WorkWell" ethos emphasizes wellness-focused design, aiming to enhance 
                holistic well-being in living and working spaces through innovative architecture and 
                thoughtful planning that prioritizes human health and happiness.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-soft hover:shadow-luxury transition-all duration-300 border border-white/60">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">2016</div>
                  <div className="text-sm font-semibold text-gray-elegant mb-1">Established</div>
                  <div className="text-xs text-muted-foreground">Max Group Real Estate Arm</div>
                </div>
              </div>
              <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-soft hover:shadow-luxury transition-all duration-300 border border-white/60">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">₹550Cr</div>
                  <div className="text-sm font-semibold text-gray-elegant mb-1">NYL Investment</div>
                  <div className="text-xs text-muted-foreground">Strategic Partnership</div>
                </div>
              </div>
            </div>

          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative">
              <OptimizedImage
                src={maxTowersImage}
                alt="Max Towers - Premium Commercial Development"
                className="rounded-xl shadow-luxury w-full h-[450px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-1">Max Towers</h4>
                <p className="text-sm text-white/90">Premium Commercial Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;