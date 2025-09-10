const Achievements = () => {
  return (
    <section id="achievements" className="py-12 bg-gradient-elegant relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden>
        <div className="h-full w-full" style={{
          backgroundImage: 'radial-gradient(circle at 30% 20%, hsla(var(--gold-light)/0.4) 0px, transparent 400px), radial-gradient(circle at 70% 80%, hsla(var(--navy-light)/0.3) 0px, transparent 350px)'
        }}></div>
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Achievements</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognized excellence in real estate development with industry-leading performance and strategic growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-primary/5 p-8 shadow-elegant hover:shadow-luxury transition-all duration-500 border border-white/60 hover:border-primary/30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative">
              <div className="text-6xl font-black text-primary mb-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">01</div>
              <h4 className="font-bold text-2xl mb-4 text-navy-deep group-hover:text-primary transition-colors duration-300">Premium Quality</h4>
              <p className="text-gray-elegant leading-relaxed text-base">
                Max Towers and Max House - both fully leased at 25-30% premium to market rates, 
                demonstrating our commitment to premium quality and tenant satisfaction.
              </p>
              <div className="mt-6 flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                <span>Grade A+ Excellence</span>
                <div className="ml-2 w-8 h-0.5 bg-primary group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-primary/5 p-8 shadow-elegant hover:shadow-luxury transition-all duration-500 border border-white/60 hover:border-primary/30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative">
              <div className="text-6xl font-black text-primary mb-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">02</div>
              <h4 className="font-bold text-2xl mb-4 text-navy-deep group-hover:text-primary transition-colors duration-300">Industry Recognition</h4>
              <p className="text-gray-elegant leading-relaxed text-base">
                Commercial Project of the Year, High-end Residential Project of the Year, 
                and multiple sustainability awards recognizing our innovative approach.
              </p>
              <div className="mt-6 flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                <span>Award-Winning Projects</span>
                <div className="ml-2 w-8 h-0.5 bg-primary group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-primary/5 p-8 shadow-elegant hover:shadow-luxury transition-all duration-500 border border-white/60 hover:border-primary/30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative">
              <div className="text-6xl font-black text-primary mb-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">03</div>
              <h4 className="font-bold text-2xl mb-4 text-navy-deep group-hover:text-primary transition-colors duration-300">Strategic Expansion</h4>
              <p className="text-gray-elegant leading-relaxed text-base">
                Aggressive expansion via strategic land acquisitions across Noida and Gurugram, 
                with a robust pipeline of premium developments.
              </p>
              <div className="mt-6 flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                <span>Growth & Development</span>
                <div className="ml-2 w-8 h-0.5 bg-primary group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
