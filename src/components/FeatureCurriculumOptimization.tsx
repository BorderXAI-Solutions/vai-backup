import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FeatureLayout } from './FeatureLayout';

export function FeatureCurriculumOptimization() {
  return (
    <FeatureLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Curriculum Optimization</h1>
          
          <div className="prose prose-lg">
            <p className="text-xl text-gray-600 mb-8">
              Our AI continuously analyzes and adjusts learning materials to ensure they remain challenging yet achievable, maximizing educational outcomes.
            </p>

            <div className="bg-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Dynamic curriculum adjustment</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Personalized content selection</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Real-time effectiveness monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80" 
                alt="Curriculum optimization"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Optimization Process</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 flex-shrink-0">1</span>
                    <p>Analysis of learning patterns and outcomes</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 flex-shrink-0">2</span>
                    <p>Content adaptation and enhancement</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 flex-shrink-0">3</span>
                    <p>Continuous refinement based on performance</p>
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