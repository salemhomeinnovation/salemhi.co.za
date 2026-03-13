import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Key, Hammer, Building2, Search, Handshake } from 'lucide-react';
import SEO from '../components/SEO';

export default function Home() {

const services = [
{ title: 'Property Rentals', icon: Key, description: 'Find the perfect rental property or list your property for rent. We connect landlords with quality tenants.' },
{ title: 'Home Renovation', icon: Hammer, description: 'Transform your property with our professional renovation services. From concept to completion.' },
{ title: 'Property Management', icon: Building2, description: 'Full-service property management including maintenance, tenant screening, and rent collection.' },
{ title: 'Property Sales', icon: Search, description: 'Expert guidance through every step of buying or selling your property in Johannesburg.' },
{ title: 'Property Valuation', icon: Search, description: "Professional property valuation services to help you understand your property's market worth." },
{ title: 'Real Estate Consulting', icon: Handshake, description: 'Expert advice on real estate investments, market trends, and property decisions.' },
];

return (

<main>

<SEO 
title="Salem Home Innovation | Property Renovation & Management Johannesburg" 
description="Salem Home Innovation specializes in property renovation, maintenance, and property management services in Johannesburg. Helping homeowners and investors improve and manage their properties."
keywords="property renovation Johannesburg, property management Gauteng, home renovation Sandton, property maintenance Randburg, Salem Home Innovation"
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

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 0.15 }}
transition={{ duration: 3 }}
className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0,transparent_60%)] z-10"
/>

<motion.img
initial={{ scale: 1.2, x: '2%', y: '2%' }}
animate={{ scale: 1, x: '0%', y: '0%' }}
transition={{ duration: 20, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
alt="Modern luxury home exterior in Johannesburg - Salem Home Innovation"
className="w-full h-full object-cover scale-110"
referrerPolicy="no-referrer"
/>

</div>

<div className="relative z-20 text-center text-white px-6 max-w-4xl">

<motion.span
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="text-xs uppercase tracking-[0.35em] mb-4 block font-medium opacity-80"

>

PROPERTY SERVICES IN JOHANNESBURG
</motion.span>

<motion.h1
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2 }}
className="text-2xl md:text-4xl lg:text-5xl font-serif mb-6 leading-[1.15] tracking-tight"

>

PROPERTY RENOVATION & MANAGEMENT
</motion.h1>

<motion.div
initial={{ opacity: 0, width: 0 }}
animate={{ opacity: 1, width: "120px" }}
transition={{ delay: 0.35, duration: 0.8 }}
className="h-[2px] bg-amber-400 mx-auto mb-10"
/>

<motion.p
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.4 }}
className="text-lg md:text-xl font-light mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed"

>

Helping Johannesburg property owners renovate, maintain, and professionally manage their properties to increase value and long-term returns.
</motion.p>

<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.6 }}
className="flex flex-col sm:flex-row gap-4 justify-center"

>

<Link
to="/contact"
className="bg-white text-stone-900 px-10 py-5 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-stone-100 transition-colors"
>
Request Consultation
</Link>

<Link
to="/services"
className="border border-white/50 text-white px-10 py-5 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
>
Our Services
</Link>

</motion.div>

</div>

</section>

{/* About Section */}

<section className="py-32 px-6 bg-white">

<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="space-y-8">

<span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
01 / About Us
</span>

<h2 className="text-4xl md:text-5xl font-serif leading-tight">
Property Improvement & Management Experts
</h2>

<p className="text-stone-600 leading-relaxed text-lg">
Salem Home Innovation is a Johannesburg-based company specializing in property renovation, maintenance, and property management services. We help homeowners and property investors improve their properties and protect their investments.
</p>

<p className="text-stone-600 leading-relaxed">
From renovating homes to managing rental properties, our team provides reliable solutions that increase property value, improve living spaces, and ensure properties are professionally maintained.
</p>

<Link
to="/about"
className="inline-flex items-center gap-2 text-stone-900 font-semibold text-sm uppercase tracking-widest group"
>
Learn More
<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
</Link>

</div>

<div className="relative">

<img
src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
alt="Modern interior renovation by Salem Home Innovation"
className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
referrerPolicy="no-referrer"
/>

<div className="absolute -bottom-10 -left-10 bg-stone-900 text-white p-10 hidden md:block">

<span className="text-4xl font-serif block mb-2">
10+
</span>

<span className="text-xs uppercase tracking-widest opacity-70">
Years of Experience
</span>

</div>

</div>

</div>

</section>

{/* CTA Section */}

<section className="py-32 px-6 bg-stone-900 text-white text-center">

<div className="max-w-3xl mx-auto space-y-10">

<h2 className="text-4xl md:text-6xl font-serif leading-tight">
Improve and Manage Your Property with Confidence
</h2>

<p className="text-stone-400 text-lg font-light">
Whether you need property renovation, maintenance, or professional property management, our team is ready to help.
</p>

<div className="flex flex-col sm:flex-row gap-4 justify-center">

<Link
to="/contact"
className="bg-white text-stone-900 px-10 py-5 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-stone-100 transition-colors"
>
Request Consultation
</Link>

<Link
to="/services"
className="border border-white/30 text-white px-10 py-5 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors"
>
View Services
</Link>

</div>

</div>

</section>

{/* WhatsApp Floating Button */}

<motion.a
href="https://wa.me/27734341657?text=Hello%20Salem%20Home%20Innovation%2C%20I%20would%20like%20to%20ask%20about%20your%20property%20services."
target="_blank"
rel="noopener noreferrer"
initial={{ scale: 0 }}
animate={{ scale: 1 }}
transition={{ delay: 1 }}
className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl"

>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
<path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.82.92 5.44 2.48 7.56L4 29l5.61-1.46A12.9 12.9 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z"/>
</svg>

</motion.a>

</main>

);
}
