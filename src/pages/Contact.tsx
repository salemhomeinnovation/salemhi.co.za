import { motion } from 'motion/react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

export default function Contact() {
  const contactInfo = [
    { 
      title: 'Office Address', 
      icon: MapPin, 
      content: '51, 5th Avenue, Fontainebleau, Johannesburg, Gauteng, 2032',
      link: 'https://maps.google.com/?q=51+5th+Avenue+Fontainebleau+Johannesburg'
    },
    { 
      title: 'Phone Number', 
      icon: Phone, 
      content: '+27 10 016 7454',
      link: 'tel:+27100167454'
    },
    { 
      title: 'WhatsApp', 
      icon: MessageSquare, 
      content: '+27 73 434 1657',
      link: 'https://wa.me/27734341657'
    },
    { 
      title: 'Email Address', 
      icon: Mail, 
      content: 'alainkale@yahoo.com',
      link: 'mailto:alainkale@yahoo.com'
    },
  ];

  return (
    <main>
      <SEO 
        title="Contact Salem Home Innovation | Property & Renovation Inquiries" 
        description="Get in touch with Salem Home Innovation for property management, rental inquiries, or home renovation quotes in Johannesburg. Our expert team is ready to assist you."
        keywords="contact Salem Home Innovation, property inquiry Johannesburg, renovation quote Gauteng, real estate office Sandton, property management contact"
      />
      <PageHero 
        title="Get In Touch" 
        subtitle="Have a question or ready to start your property journey? Our team is here to help."
        breadcrumb="Contact Us"
      />

      {/* Contact Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {contactInfo.map((info, index) => (
              <motion.a 
                key={info.title}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-6 group"
              >
                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors duration-500">
                  <info.icon size={20} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-stone-400">{info.title}</h4>
                  <p className="text-lg font-serif group-hover:text-stone-600 transition-colors leading-relaxed">{info.content}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-50 p-10 md:p-16 rounded-sm border border-stone-100 shadow-xl"
          >
            <form 
              className="space-y-6" 
              action="https://formspree.io/f/mkoqojpv" 
              method="POST"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Full Name</label>
                  <input name="Name" type="text" className="w-full bg-white border border-stone-200 p-4 text-sm focus:outline-none focus:border-stone-900 transition-colors" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Email Address</label>
                  <input name="Email" type="email" className="w-full bg-white border border-stone-200 p-4 text-sm focus:outline-none focus:border-stone-900 transition-colors" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Subject</label>
                <input name="Subject" type="text" className="w-full bg-white border border-stone-200 p-4 text-sm focus:outline-none focus:border-stone-900 transition-colors" placeholder="Property Inquiry" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Message</label>
                <textarea name="Message" className="w-full bg-white border border-stone-200 p-4 text-sm focus:outline-none focus:border-stone-900 transition-colors min-h-[150px]" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="w-full bg-stone-900 text-white py-5 text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-stone-200 grayscale opacity-50">
        <div className="w-full h-full flex items-center justify-center text-stone-400 font-serif text-2xl">
          Map View - Fontainebleau, Johannesburg
        </div>
      </section>
    </main>
  );
}
