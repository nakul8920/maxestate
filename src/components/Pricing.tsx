import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEnquire } from '@/contexts/EnquireContext';

type UnitSpec = {
  sizeSqFt: number;
  pricePerSqFt: number;
};

const formatCurrencyINR = (amount: number) => {
  try {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  } catch {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
};

const formatCrore = (amount: number, decimals: number = 2) => {
  const croreValue = amount / 10000000; // 1 Cr = 10,000,000
  return `${croreValue.toFixed(decimals)} Cr*`;
};

const Pricing = () => {
  const { openEnquireForm } = useEnquire();
  const pricePerSqFt = 22000;
  const units: UnitSpec[] = [
    { sizeSqFt: 4507, pricePerSqFt },
    { sizeSqFt: 5235, pricePerSqFt },
    { sizeSqFt: 5720, pricePerSqFt },
  ];

  return (
    <section id="pricing" className="py-12 bg-gradient-to-b from-background to-muted/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Elegant <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our spacious residences. Prices are indicative and computed at {formatCurrencyINR(pricePerSqFt)} per sq ft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {units.map((unit, index) => {
            const totalPrice = unit.sizeSqFt * unit.pricePerSqFt;
            const isFeatured = index === 1;
            return (
              <Card key={unit.sizeSqFt} className={`relative overflow-hidden ${isFeatured ? 'border-primary shadow-xl scale-[1.02]' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                {isFeatured && (
                  <div className="absolute top-3 right-3 text-xs font-semibold bg-primary text-primary-foreground px-2 py-1 rounded">Popular</div>
                )}
                <CardContent className="p-8">
                  <div className="mb-2 text-sm uppercase tracking-wider text-muted-foreground">Typology</div>
                  <h3 className="text-2xl font-bold mb-4">{unit.sizeSqFt} sq ft</h3>
                  <div className="mb-6">
                    {index === 0 ? (
                      <>
                        <div className="text-sm text-muted-foreground">Starting from</div>
                        <div className="text-3xl font-extrabold text-navy-deep">{formatCrore(totalPrice)}</div>
                      </>
                    ) : (
                      <div className="text-3xl font-extrabold text-navy-deep">Price on request</div>
                    )}
                  </div>

                  <ul className="space-y-2 text-sm text-foreground/80 mb-8">
                    <li className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" /> Premium finishes & specifications
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" /> Access to 46,000 sq ft amenity hub
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" /> Flexible payment plans available
                    </li>
                  </ul>

                  <div className="flex items-center gap-3">
                    <Button 
                      className="flex-1 text-black
                       hover:opacity-90"
                      style={{ 
                        background: 'linear-gradient(135deg, rgb(212, 175, 55) 0%, rgb(245, 224, 138) 50%, rgb(212, 175, 55) 100%)'
                      }}
                      onClick={() => openEnquireForm(`Pricing - ${unit.sizeSqFt} sq ft`)}
                    >
                      Enquire Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open('https://wa.me/917303665082?text=Hi, I am interested in downloading the brochure for Max Estate 128. Please provide more details.', '_blank')}
                    >
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;


