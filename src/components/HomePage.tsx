import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { Vision } from './Vision';
import { Testimonials } from './Testimonials';
import { Footer } from './Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Vision />
      <Testimonials />
      
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Child's Educational Journey?
          </h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Join Victoria Today
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}