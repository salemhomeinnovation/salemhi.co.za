import { motion } from 'motion/react';
import { Bed, Bath, Car, Maximize } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

export default function Properties() {
  const properties = [
    {
      id: 1,
      title: '2 Bedroom Apartment',
      location: 'Fourways, Johannesburg',
      price: 'R 9,500 / month',
      image: 'https://images.pp.co.za/listing/11715143/izkNhYJdhHsyeaCuYuL5q6/600/450/contain/jpegorpng',
      beds: 2,
      baths: 1,
      link: 'https://www.privateproperty.co.za/to-rent/gauteng/johannesburg-metro/sandton/fourways/RR4625316'
    },
    {
      id: 2,
      title: 'Studio Apartment',
      location: 'Franklin Roosevelt Park, Johannesburg',
      price: 'R 4,200 / month',
      image: 'https://images.pp.co.za/listing/11703684/KzC2Nzbj805x6nnVOncXF1/600/450/contain/jpegorpng',
      beds: 1,
      baths: 1,
      link: 'https://www.privateproperty.co.za/to-rent/gauteng/johannesburg-metro/northcliff/roosevelt-park/franklin-roosevelt-park/RR4620776'
    },
    {
      id: 3,
      title: '3 Bedroom Apartment',
      location: 'Little Falls, Roodepoort',
      price: 'R 8,500 / month',
      image: 'https://images.pp.co.za/listing/11693066/RduzAVc1iNmKb6fR2HJ611/600/450/contain/jpegorpng',
      beds: 3,
      baths: 2,
      garage: 1,
      link: 'https://www.privateproperty.co.za/to-rent/gauteng/west-rand/roodepoort/little-falls/RR4617069'
    },
    {
      id: 4,
      title: '2 Bedroom House',
      location: 'Morningside, Sandton',
      price: 'R 19,000 / month',
      image: 'https://images.pp.co.za/listing/11686926/qLqBjtEIAp2fWRuZIZKFj7/600/450/contain/jpegorpng',
      beds: 2,
      baths: 2,
      garage: 2,
      size: '133m²',
      link: 'https://www.privateproperty.co.za/to-rent/gauteng/johannesburg-metro/sandton/morningside/RR4614818'
    },
    {
      id: 5,
      title: '4.5 Bedroom House',
      location: 'Rivonia, Sandton',
      price: 'R 50,000 / month',
      image: 'https://images.pp.co.za/listing/11648582/ENi1RsgnS7s9NAJyNrg7p0/600/450/contain/jpegorpng',
      beds: 4.5,
      baths: 4.5,
      garage: 2,
      size: '1200m²',
      link: 'https://www.privateproperty.co.za/to-rent/gauteng/johannesburg-metro/sandton/rivonia/RR4600091'
    },
    {
      id: 6,
      title: '4 Bedroom House',
      location: 'Bryanston, Sandton',
      price: 'R 37,500 / month',
      image: 'https://images.pp.co.za/listing/11647111/ubsPpnJOJo5IE63XAQvog2/600/450/contain/jpegorpng',
      beds: 4,
      baths: 2.5,
      garage: 3,
      size: '420m²',
      link: 'https://www.privateproperty.co.za/to-rent/gauteng/johannesburg-metro/sandton/bryanston/RR4599520'
    }
  ];

  return (
    <main>
      <SEO 
        title="Luxury Rentals & Property Listings Johannesburg | Salem Home Innovation" 
        description="View our curated selection of apartments and houses for rent in Johannesburg's top neighborhoods. Find your dream home with Salem Home Innovation's exclusive listings."
        keywords="apartments for rent Johannesburg, houses for rent Sandton, luxury rentals Gauteng, property listings Randburg, real estate for rent Johannesburg"
      />
      <PageHero 
        title="Available Properties" 
        subtitle="Browse our curated selection of premium rentals and sales in Johannesburg."
        breadcrumb="Exclusive Listings"
      />

      {/* Properties Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.map((prop, index) => (
              <motion.a 
                key={prop.id}
                href={prop.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group block bg-white border border-stone-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={prop.image} 
                    alt={`${prop.title} in ${prop.location} - Salem Home Innovation Property Listing`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 bg-stone-900 text-white px-6 py-3 text-sm font-semibold">
                    {prop.price}
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif group-hover:text-stone-600 transition-colors">{prop.title}</h3>
                    <p className="text-stone-400 text-sm uppercase tracking-widest font-medium">{prop.location}</p>
                  </div>
                  <div className="flex items-center gap-6 pt-6 border-t border-stone-100">
                    <div className="flex items-center gap-2 text-stone-500 text-sm">
                      <Bed size={16} />
                      <span>{prop.beds}</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500 text-sm">
                      <Bath size={16} />
                      <span>{prop.baths}</span>
                    </div>
                    {prop.garage && (
                      <div className="flex items-center gap-2 text-stone-500 text-sm">
                        <Car size={16} />
                        <span>{prop.garage}</span>
                      </div>
                    )}
                    {prop.size && (
                      <div className="flex items-center gap-2 text-stone-500 text-sm">
                        <Maximize size={16} />
                        <span>{prop.size}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a 
              href="https://www.privateproperty.co.za/estate-agent/alain-kalengayi/rental-listings/2273667" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-stone-900 text-white px-12 py-6 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 transition-colors"
            >
              View All Listings on PrivateProperty
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
