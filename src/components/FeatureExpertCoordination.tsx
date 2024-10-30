import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FeatureLayout } from './FeatureLayout';

export function FeatureExpertCoordination() {
  return (
    <FeatureLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Expert Coordination</h1>
          
          <div className="prose prose-lg">
            <p className="text-xl text-gray-600 mb-8">
              Victoria seamlessly connects all educational stakeholders, ensuring everyone works together effectively towards your child's success.
            </p>

            <div className="bg-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Unified communication platform for all stakeholders</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Automated scheduling and coordination</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Real-time updates and feedback sharing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80" 
                alt="Expert coordination"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Collaborative Approach</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 flex-shrink-0">1</span>
                    <p>Connect with teachers, tutors, and coaches</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 flex-shrink-0">2</span>
                    <p>Share progress and receive expert feedback</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 flex-shrink-0">3</span>
                    <p>Coordinate activities and schedules efficiently</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
}