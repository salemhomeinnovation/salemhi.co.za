import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

export default function About() {
  const stats = [
    { label: 'Happy Clients', value: '100+' },
    { label: 'Properties Managed', value: '50+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Completed', value: '200+' },
  ];

  return (
    <main>
      <SEO 
        title="About Salem Home Innovation | Property Experts in Johannesburg" 
        description="Discover the story of Salem Home Innovation. With over a decade of experience, we provide top-tier property services and home renovations across Johannesburg and Gauteng."
        keywords="about Salem Home Innovation, Alain Kalle, property experts Johannesburg, real estate history Gauteng, renovation specialists South Africa"
      />
      <PageHero 
        title="Salem Home Innovation" 
        subtitle="Your trusted partner for property services and home renovation in Johannesburg."
        breadcrumb="About Us"
      />

      {/* Content */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
            <p>
              Salem Home Innovation is a trusted property services and home renovation company based in Johannesburg, South Africa. We specialize in property rentals, property management support, and professional home renovation services designed to improve the value, functionality, and comfort of residential properties.
            </p>
            <p>
              Our team works with homeowners, property investors, and tenants to provide reliable solutions for finding rental properties, improving homes through quality renovations, and maintaining properties to the highest standards. From small upgrades to complete property improvements, we focus on delivering practical results that increase property value and enhance living spaces.
            </p>
            <p>
              At Salem Home Innovation, we believe that every property has the potential to become something better. Our goal is to provide professional, transparent, and efficient services that help clients make smarter property decisions while creating homes that are comfortable, modern, and built to last.
            </p>
          </div>

          <div className="bg-stone-50 p-12 rounded-sm border border-stone-100 flex flex-col md:flex-row items-center gap-10">
            <img 
              src="https://helium.privateproperty.co.za/live-za-images/offices/14683/image/39ba44a6953b47c5bcb9e7c56c47eb8d_ola.jpg" 
              alt="Mr. Alain Kalle - Founder & CEO of Salem Home Innovation Johannesburg" 
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              referrerPolicy="no-referrer"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif mb-1">Mr. Alain Kalle</h3>
              <p className="text-stone-400 text-sm uppercase tracking-widest font-semibold mb-4">Founder & CEO</p>
              <p className="text-stone-600 italic">
                "Our mission is to transform the real estate experience in Johannesburg through innovation, integrity, and exceptional service."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <span className="text-5xl md:text-6xl font-serif block">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest opacity-50">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Integrity</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              We believe in transparent communication and honest dealings in every property transaction and renovation project.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Innovation</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Constantly seeking new ways to improve property value and functionality through modern design and smart management.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Excellence</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Committed to delivering the highest quality of workmanship and service to our clients across Gauteng.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
