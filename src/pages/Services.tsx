import { motion } from 'motion/react';
import { Key, Hammer, Building2, Search, Handshake, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

export default function Services() {
  const services = [
    { 
      title: 'Property Rentals', 
      icon: Key, 
      description: 'Find the perfect rental property or list your property for rent. We connect landlords with quality tenants through a rigorous screening process.',
      features: ['Tenant Screening', 'Lease Agreements', 'Rent Collection', 'Property Marketing']
    },
    { 
      title: 'Home Renovation', 
      icon: Hammer, 
      description: 'Transform your property with our professional renovation services. From kitchen remodels to full property upgrades.',
      features: ['Interior Design', 'Structural Changes', 'Kitchen & Bath', 'Painting & Flooring']
    },
    { 
      title: 'Property Management', 
      icon: Building2, 
      description: 'Full-service property management including maintenance, tenant relations, and financial reporting.',
      features: ['24/7 Maintenance', 'Financial Reporting', 'Tenant Relations', 'Legal Compliance']
    },
    { 
      title: 'Property Sales', 
      icon: Search, 
      description: 'Expert guidance through every step of buying or selling your property. We help you get the best market value.',
      features: ['Market Analysis', 'Professional Photography', 'Negotiation', 'Closing Support']
    },
    { 
      title: 'Property Valuation', 
      icon: ShieldCheck, 
      description: 'Professional property valuation services to help you understand your property\'s true market worth.',
      features: ['Accurate Assessment', 'Market Comparison', 'Detailed Reports', 'Investment Advice']
    },
    { 
      title: 'Real Estate Consulting', 
      icon: Handshake, 
      description: 'Expert advice on real estate investments, market trends, and property decisions for long-term growth.',
      features: ['Investment Strategy', 'Portfolio Management', 'Market Insights', 'Risk Assessment']
    },
  ];

  return (
    <main>
      <SEO 
        title="Property Services & Home Renovations | Salem Home Innovation" 
        description="From property management and rentals to professional home renovations and real estate consulting, explore our comprehensive property solutions in Johannesburg."
        keywords="property management services, home renovation Johannesburg, real estate consulting Gauteng, property maintenance Sandton, rental management Randburg"
      />
      <PageHero 
        title="Expert Real Estate Solutions" 
        subtitle="Comprehensive property services tailored to your needs in Johannesburg and surrounding areas."
        breadcrumb="Our Services"
      />

      {/* Services Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-8 p-10 bg-stone-50 border border-stone-100 hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-sm"
            >
              <div className="w-16 h-16 bg-stone-900 text-white rounded-full flex items-center justify-center">
                <service.icon size={28} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-serif">{service.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <ul className="space-y-3 pt-6 border-t border-stone-200">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-stone-400">
                    <div className="w-1.5 h-1.5 bg-stone-900 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest opacity-50 font-semibold">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-serif">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Consultation', text: 'We discuss your needs and property goals in detail.' },
              { step: '02', title: 'Strategy', text: 'We develop a tailored plan for your property or project.' },
              { step: '03', title: 'Execution', text: 'Our expert team brings the plan to life with precision.' },
              { step: '04', title: 'Delivery', text: 'We ensure complete satisfaction and ongoing support.' },
            ].map((item) => (
              <div key={item.step} className="space-y-6 relative">
                <span className="text-6xl font-serif opacity-10 block">{item.step}</span>
                <h4 className="text-xl font-serif">{item.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
