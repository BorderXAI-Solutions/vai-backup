import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { FeatureNavigation } from './FeatureNavigation';

interface FeatureLayoutProps {
  children: React.ReactNode;
}

export function FeatureLayout({ children }: FeatureLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <FeatureNavigation />
      <div className="pl-80">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}