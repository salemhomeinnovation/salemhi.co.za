import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Key, Hammer, Building2, Search, Handshake, Quote } from 'lucide-react';
import SEO from '../components/SEO';

export default function Home() {
  const services = [
    { title: 'Property Rentals', icon: Key, description: 'Find the perfect rental property or list your property for rent. We connect landlords with quality tenants.' },
    { title: 'Home Renovation', icon: Hammer, description: 'Transform your property with our professional renovation services. From concept to completion.' },
    { title: 'Property Management', icon: Building2, description: 'Full-service property management including maintenance, tenant screening, and rent collection.' },
    { title: 'Property Sales', icon: Search, description: 'Expert guidance through every step of buying or selling your property in Johannesburg.' },
    { title: 'Property Valuation', icon: Search, description: 'Professional property valuation services to help you understand your property\'s market worth.' },
    { title: 'Real Estate Consulting', icon: Handshake, description: 'Expert advice on real estate investments, market trends, and property decisions.' },
  ];

  return (
    <main>
      <SEO 
        title="Salem Home Innovation | Real Estate & Home Renovation Johannesburg" 
        description="Salem Home Innovation offers expert property management, rentals, and professional home renovations in Johannesburg. Transform your property with our 10+ years of experience."
        keywords="real estate Johannesburg, property management Gauteng, home renovation Sandton, rental properties Randburg, Salem Home Innovation, property services South Africa"
      />
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/40 to-stone-900/80 z-10" 
          />
          <motion.img 
            initial={{ scale: 1.2, x: '2%', y: '2%' }}
            animate={{ scale: 1, x: '0%', y: '0%' }}
            transition={{ 
              duration: 20, 
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" 
            alt="Modern luxury home exterior in Johannesburg - Salem Home Innovation" 
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
          <motion.div 
            initial={{ x: '-100%', skewX: -20 }}
            animate={{ x: '200%' }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatDelay: 5,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-15 pointer-events-none"
          />
        </div>

        <div className="relative z-20 text-center text-white px-6 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.3em] mb-6 block font-medium opacity-80"
          >
            Welcome to Salem Home Innovation
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] tracking-tight"
          >
            EXPERT REAL ESTATE SOLUTIONS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-light mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed"
          >
            Your trusted partner for property sales, rentals, and professional home renovations in Johannesburg.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/properties" className="bg-white text-stone-900 px-10 py-5 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-stone-100 transition-colors">
              View Properties
            </Link>
            <Link to="/contact" className="border border-white/50 text-white px-10 py-5 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
              Contact Us
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-50">
          <div className="w-px h-12 bg-white" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">01 / About Us</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Expertise in Property & Innovation</h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              Salem Home Innovation is a trusted property services and home renovation company based in Johannesburg. We specialize in property rentals, management support, and professional home renovation services designed to improve the value, functionality, and comfort of residential properties.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Our team works with homeowners, property investors, and tenants to provide reliable solutions for finding rental properties, improving homes through quality renovations, and maintaining properties to the highest standards.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-stone-900 font-semibold text-sm uppercase tracking-widest group">
              Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" 
              alt="Elegant modern interior design by Salem Home Innovation" 
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-stone-900 text-white p-10 hidden md:block">
              <span className="text-4xl font-serif block mb-2">10+</span>
              <span className="text-xs uppercase tracking-widest opacity-70">Years of Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">02 / Services</span>
            <h2 className="text-4xl md:text-5xl font-serif">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 border border-stone-100 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-500">
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">03 / Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif">Client Experiences</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                text: "Salem Home Innovation transformed our old kitchen into a modern masterpiece. Their attention to detail and professionalism throughout the renovation was exceptional.",
                author: "Sarah Mitchell",
                role: "Homeowner in Sandton"
              },
              {
                text: "Managing my rental properties was a headache until I partnered with Alain and his team. Their property management services are reliable and transparent.",
                author: "David Ndlovu",
                role: "Property Investor"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={testimonial.author}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-stone-50 p-12 relative"
              >
                <Quote className="absolute top-8 right-8 text-stone-200" size={48} />
                <div className="space-y-6 relative z-10">
                  <p className="text-xl text-stone-700 font-serif leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-stone-900">{testimonial.author}</p>
                    <p className="text-stone-400 text-xs uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-stone-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">Ready to find your next home?</h2>
          <p className="text-stone-400 text-lg font-light">
            Browse our exclusive listings or contact our expert team for professional property advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties" className="bg-white text-stone-900 px-10 py-5 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-stone-100 transition-colors">
              Browse Listings
            </Link>
            <Link to="/contact" className="border border-white/30 text-white px-10 py-5 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
