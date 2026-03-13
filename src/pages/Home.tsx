import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Key, Hammer, Building2, Search, Handshake, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function Home() {

const services = [
{ title: 'Property Rentals', icon: Key, description: 'Find the perfect rental property or list your property for rent.' },
{ title: 'Home Renovation', icon: Hammer, description: 'Transform your property with our professional renovation services.' },
{ title: 'Property Management', icon: Building2, description: 'Full-service property management including maintenance and tenant screening.' },
{ title: 'Property Sales', icon: Search, description: 'Expert guidance through every step of buying or selling your property.' },
{ title: 'Property Valuation', icon: Search, description: "Professional valuation services for accurate market value." },
{ title: 'Real Estate Consulting', icon: Handshake, description: 'Expert advice on real estate investments and property decisions.' },
];

return (

<main>

<SEO 
title="Salem Home Innovation | Property Renovation & Property Management Johannesburg"
description="Salem Home Innovation provides property renovation, property management, maintenance, and consulting services in Johannesburg, Gauteng."
keywords="property renovation Johannesburg, property management Johannesburg, home renovation Gauteng, rental property management Johannesburg"
/>

{/* HERO SECTION */}

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 2 }}
className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/40 to-stone-900/80 z-10"
/>

<motion.img
initial={{ scale: 1.2 }}
animate={{ scale: 1 }}
transition={{ duration: 20, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
alt="Luxury home renovation and property management in Johannesburg"
className="w-full h-full object-cover"
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
className="text-2xl md:text-4xl lg:text-5xl font-serif mb-6 leading-[1.15]"

>

Property Renovation & Management
</motion.h1>

<motion.div
initial={{ opacity: 0, width: 0 }}
animate={{ opacity: 1, width: "120px" }}
transition={{ delay: 0.35 }}
className="h-[2px] bg-amber-400 mx-auto mb-10"
/>

<p className="text-lg md:text-xl font-light mb-12 opacity-90 max-w-2xl mx-auto">
Helping Johannesburg property owners renovate, maintain, and professionally manage their properties to increase value and long-term returns.
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
className="border border-white/50 text-white px-10 py-5 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors"
>
Our Services
</Link>

</div>

</div>

</section>

{/* TRUST SECTION (PREMIUM STYLE) */}

<section className="py-20 bg-stone-100">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-2xl md:text-3xl font-serif mb-10">
Trusted Property Services in Johannesburg
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="bg-white p-6 shadow-sm hover:shadow-md transition">
<CheckCircle className="mx-auto mb-3 text-amber-500" />
<p className="text-sm font-semibold">Renovation Specialists</p>
</div>

<div className="bg-white p-6 shadow-sm hover:shadow-md transition">
<CheckCircle className="mx-auto mb-3 text-amber-500" />
<p className="text-sm font-semibold">Property Management</p>
</div>

<div className="bg-white p-6 shadow-sm hover:shadow-md transition">
<CheckCircle className="mx-auto mb-3 text-amber-500" />
<p className="text-sm font-semibold">Rental & Sales Support</p>
</div>

<div className="bg-white p-6 shadow-sm hover:shadow-md transition">
<CheckCircle className="mx-auto mb-3 text-amber-500" />
<p className="text-sm font-semibold">Trusted by Property Owners</p>
</div>

</div>

</div>

</section>

{/* ABOUT SECTION */}

<section className="py-32 px-6 bg-white">

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

<div className="space-y-8">

<span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
01 / About Us
</span>

<h2 className="text-4xl md:text-5xl font-serif">
Property Improvement & Management Experts
</h2>

<p className="text-stone-600 text-lg">
Salem Home Innovation is a Johannesburg-based company specializing in property renovation, maintenance, and property management services.
</p>

<Link
to="/about"
className="inline-flex items-center gap-2 text-stone-900 font-semibold text-sm uppercase tracking-widest"
>
Learn More
<ArrowRight size={16}/>
</Link>

</div>

<img
src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
alt="Interior renovation project Johannesburg"
className="w-full aspect-[4/5] object-cover shadow-xl"
/>

</div>

</section>

{/* CTA SECTION */}

<section className="py-32 px-6 bg-stone-900 text-white text-center">

<div className="max-w-3xl mx-auto space-y-10">

<h2 className="text-4xl md:text-6xl font-serif">
Improve and Manage Your Property with Confidence
</h2>

<p className="text-stone-400 text-lg">
Whether you need renovation, maintenance, or property management, our team is ready to help.
</p>

<div className="flex flex-col sm:flex-row gap-4 justify-center">

<Link
to="/contact"
className="bg-white text-stone-900 px-10 py-5 rounded-sm text-xs uppercase tracking-widest font-semibold"
>
Request Consultation
</Link>

<Link
to="/services"
className="border border-white/30 text-white px-10 py-5 rounded-sm text-xs uppercase tracking-widest font-semibold"
>
View Services
</Link>

</div>

</div>

</section>

{/* WHATSAPP BUTTON */}

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
