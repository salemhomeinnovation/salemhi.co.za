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
        description="Contact Salem Home Innovation for property management, rental inquiries, or renovation quotes in Johannesburg."
        keywords="property renovation Johannesburg contact, property management inquiry, Salem Home Innovation contact"
      />

      <PageHero 
        title="Contact Salem Home Innovation"
        subtitle="Have a question about property renovation, rentals, or property management? Our team is ready to assist."
        breadcrumb="Contact Us"
      />

      {/* CONTACT SECTION */}

      <section className="py-32 px-6 bg-white">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* CONTACT INFO */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

            {contactInfo.map((info, index) => (

              <motion.a
                key={info.title}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-6 group"
              >

                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors duration-500">
                  <info.icon size={20} />
                </div>

                <div>
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

          {/* CONTACT FORM */}

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

              {/* FORM CONFIG */}

              <input type="hidden" name="_subject" value="New Message - Salem Home Innovation Website" />
              <input type="hidden" name="_next" value="https://salemhi.co.za/thank-you" />
              <input type="text" name="_gotcha" style={{ display: "none" }} />

              {/* NAME + EMAIL */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white border border-stone-200 p-4 text-sm focus:outline-none focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@email.com"
                    className="w-full bg-white border border-stone-200 p-4 text-sm focus:outline-none focus:border-stone-900"
                  />
                </div>

              </div>

              {/* PHONE + SERVICE */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+27..."
                    className="w-full bg-white border border-stone-200 p-4 text-sm"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
                    Service Needed
                  </label>

                  <select
                    name="service"
                    required
                    className="w-full bg-white border border-stone-200 p-4 text-sm"
                  >
                    <option value="">Select a service</option>
                    <option>Property Renovation</option>
                    <option>Property Management</option>
                    <option>Property Rentals</option>
                    <option>Construction</option>
                    <option>Property Development</option>
                  </select>
                </div>

              </div>

              {/* BUDGET */}

              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
                  Estimated Budget
                </label>

                <select
                  name="budget"
                  className="w-full bg-white border border-stone-200 p-4 text-sm"
                >
                  <option value="">Select budget range</option>
                  <option>Under R10 000</option>
                  <option>R10 000 - R50 000</option>
                  <option>R50 000 - R200 000</option>
                  <option>Over R200 000</option>
                </select>
              </div>

              {/* MESSAGE */}

              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full bg-white border border-stone-200 p-4 text-sm min-h-[150px]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-stone-900 text-white py-5 text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 transition-colors"
              >
                Send Request
              </button>

            </form>

          </motion.div>

        </div>

      </section>

      {/* MAP */}

      <section className="h-[500px]">

        <iframe
          src="https://maps.google.com/maps?q=51%205th%20Avenue%20Fontainebleau%20Johannesburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />

      </section>

    </main>
  );
}
