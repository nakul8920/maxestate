import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured <span className="text-primary">Project</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Max Estate 128, Sector 128, Noida - Ultra-luxury residential development 
            redefining premium living standards.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-luxury">
            <div className="grid md:grid-cols-2">
              <div className="p-8 bg-gradient-to-br from-navy-deep to-navy-light text-white">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl font-bold mb-4">Max Estate 128</CardTitle>
                  <p className="text-gray-light text-lg">
                    Sector 128, Noida-Greater Noida Expressway
                  </p>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-primary-glow mb-2">Project Highlights</h4>
                      <ul className="space-y-2 text-gray-light">
                        <li>• 10 acres ultra-luxury development</li>
                        <li>• 3 high-rise towers (36 floors each)</li>
                        <li>• 200-201 premium units</li>
                        <li>• Over 80% open green space</li>
                        <li>• 46,000 sq ft amenity hub</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-primary-glow mb-2">Unit Configurations</h4>
                      <ul className="space-y-2 text-gray-light">
                        <li>• Luxury 4 BHK & 5 BHK apartments</li>
                        <li>• Carpet area: 2,364 - 4,613 sq ft</li>
                        <li>• Wrap-around decks for outdoor living</li>
                        <li>• Premium finishes & fittings</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
              
              <div className="p-8 bg-white">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-6 text-navy-deep">Pricing & Investment</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-gray-light rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">₹5.91Cr</div>
                      <div className="text-sm text-gray-elegant">Starting Price</div>
                    </div>
                    <div className="text-center p-4 bg-gray-light rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">₹32.77Cr</div>
                      <div className="text-sm text-gray-elegant">Premium Units</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-elegant">Price per sq ft</span>
                      <span className="font-semibold">~₹25,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-elegant">4 BHK (2,364 sq ft)</span>
                      <span className="font-semibold">₹5.38Cr+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-elegant">5 BHK Premium</span>
                      <span className="font-semibold">₹10Cr - ₹24Cr+</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full hover:shadow-luxury text-black" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f5e08a 50%, #d4af37 100%)' }}>
                      Get Price Details
                    </Button>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      Schedule Site Visit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;