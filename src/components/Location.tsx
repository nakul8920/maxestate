import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Location = () => {
  const nearbyPlaces = [
    { name: 'Axis House Business Park', distance: '240m', type: 'Business' },
    { name: 'Noida-Greater Noida Expressway', distance: '1 km', type: 'Connectivity' },
    { name: 'Delhi Public School', distance: '3 km', type: 'Education' },
    { name: 'Amity University', distance: '5 km', type: 'Education' },
    { name: 'Max Super Speciality Hospital', distance: '4 km', type: 'Healthcare' },
    { name: 'Noida Golf Course', distance: '6 km', type: 'Recreation' },
    { name: 'DLF Mall of India', distance: '7 km', type: 'Shopping' },
    { name: 'NSEZ Metro Station', distance: '3 km', type: 'Metro' }
  ];

  const connectivity = [
    { mode: 'Metro', stations: 'NSEZ, Sector 83, Sector 81', time: '5-10 min' },
    { mode: 'Airport', route: 'IGI Airport via Expressway', time: '45 min' },
    { mode: 'Delhi', route: 'Connaught Place', time: '35 min' },
    { mode: 'Gurugram', route: 'Cyber City', time: '40 min' }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Prime <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Location</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategically located in Sector 128, Noida with excellent connectivity 
            to Delhi NCR and world-class amenities nearby.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 shadow-elegant">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold text-navy-deep">Address & Location</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg mb-2 text-navy-deep">Max Estate 128</h4>
                <p className="text-gray-elegant leading-relaxed">
                  Plot No. TS-02, Jaypee Greens Wish Town,<br/>
                  Sector 128, Noida-Greater Noida Expressway,<br/>
                  Uttar Pradesh, 201304
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-navy-deep">Key Advantages</h4>
                <ul className="space-y-2 text-gray-elegant">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Direct access to Noida-Greater Noida Expressway
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Proximity to Jewar International Airport
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Well-connected metro network
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Established residential & commercial hub
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 shadow-elegant">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold text-navy-deep">Connectivity</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-4">
                {connectivity.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-light rounded-lg">
                    <div>
                      <div className="font-bold text-navy-deep">{item.mode}</div>
                      <div className="text-sm text-gray-elegant">{item.route}</div>
                    </div>
                    <div className="text-primary font-bold">{item.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-luxury">
          <CardHeader className="text-center p-8 bg-gradient-to-r from-navy-deep to-navy-light text-white">
            <CardTitle className="text-3xl font-bold">Nearby Landmarks</CardTitle>
            <p className="text-gray-light mt-2">Everything you need within reach</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nearbyPlaces.map((place, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-primary/5 border border-gray-100 hover:border-primary/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold mb-2">
                          <span className="px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">{place.type}</span>
                          <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-600 border border-gray-200">{place.distance}</span>
                        </div>
                        <h4 className="font-bold text-lg text-navy-deep leading-tight group-hover:text-primary transition-colors duration-300">
                          {place.name}
                        </h4>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Max Estate 128</span>
                        <span className="inline-flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                          Nearby Landmark
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-xl group-hover:scale-125 transition-transform duration-700"></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Location;