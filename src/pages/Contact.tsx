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
      content: 'info@salemhi.co.za',
      link: 'mailto:info@salemhi.co.za'
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

          {/* Contact Info */}
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
                  <h4 className="text-xs uppercase tracking-widest font-bold text-stone-400">
                    {info.title}
                  </h4>
                  <p className="text-lg font-serif group-hover:text-stone-600 transition-colors leading-relaxed">
                    {info.content}
                  </p>
                </div>

              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-50 p-10 md:p-16 rounded-sm border border-stone-100 shadow-xl"
          >
           <form 
  className="space-y-6" 
  action="https://formspree.io/f/xvzwrqqa" 
  method="POST"
>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
        Full Name
      </label>
      <input
        name="Name"
        type="text"
        placeholder="John Doe"
        required
        className="w-full bg-white border border-stone-200 p-4 text-sm focus:outline-none focus:border-stone-900 transition-colors"
      />
    </div>

    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
        Email Address
      </label>
      <input
        name="Email"
        type="email"
        placeholder="john@email.com"
        required
        className="w-full bg-white border border-stone-200 p-4 text-sm focus:outline-none focus:border-stone-900 transition-colors"
      />
    </div>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
        Phone Number
      </label>
      <input
        name="Phone"
        type="tel"
        placeholder="+27..."
        required
        className="w-full bg-white border border-stone-200 p-4 text-sm focus:outline-none focus:border-stone-900 transition-colors"
      />
    </div>

    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
        Service Needed
      </label>
      <select
        name="Service"
        required
        className="w-full bg-white border border-stone-200 p-4 text-sm focus:outline-none focus:border-stone-900 transition-colors"
      >
        <option value="">Select a service</option>
        <option>Property Renovation</option>
        <option>Construction</option>
        <option>Home Improvement</option>
        <option>Property Development</option>
        <option>Property Management</option>
      </select>
    </div>

  </div>

  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
      Estimated Budget
    </label>
    <select
      name="Budget"
      className="w-full bg-white border border-stone-200 p-4 text-sm focus:outline-none focus:border-stone-900 transition-colors"
    >
      <option value="">Select budget range</option>
      <option>Under R10 000</option>
      <option>R10 000 - R50 000</option>
      <option>R50 000 - R200 000</option>
      <option>Over R200 000</option>
    </select>
  </div>

  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
      Message
    </label>
    <textarea
      name="Message"
      placeholder="Tell us about your project..."
      required
      className="w-full bg-white border border-stone-200 p-4 text-sm focus:outline-none focus:border-stone-900 transition-colors min-h-[150px]"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-stone-900 text-white py-5 text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 transition-colors shadow-lg"
  >
    Send Request
  </button>

</form>
          </motion.div>

        </div>
      </section>

      {/* Google Map */}
      <section className="h-[500px]">
        <iframe
          src="https://maps.google.com/maps?q=51%205th%20Avenue%20Fontainebleau%20Johannesburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </section>

    </main>
  );
}
