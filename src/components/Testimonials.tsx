import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Victoria has transformed how I manage my children's education. It's like having a personal education consultant.",
      author: "Sarah M., Mother of two"
    },
    {
      quote: "The personalized recommendations have helped us find the perfect balance between academics and extracurriculars.",
      author: "David L., Father of three"
    },
    {
      quote: "Finally, a tool that understands the complexities of modern parenting and education.",
      author: "Michelle K., Parent"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Trusted by Parents Worldwide
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <Star className="w-8 h-8 text-yellow-400 mb-4" />
              <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              <p className="text-gray-900 font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}