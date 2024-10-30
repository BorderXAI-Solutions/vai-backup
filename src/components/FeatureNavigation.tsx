import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Target, LineChart, Users, BookOpen, Sparkles } from 'lucide-react';

export function FeatureNavigation() {
  const location = useLocation();
  
  const features = [
    {
      icon: Brain,
      title: "Talent Discovery",
      path: "/features/talent-discovery",
      description: "AI-powered assessment of abilities"
    },
    {
      icon: Target,
      title: "Personalized Learning",
      path: "/features/personalized-learning",
      description: "Custom educational strategies"
    },
    {
      icon: LineChart,
      title: "Progress Tracking",
      path: "/features/progress-tracking",
      description: "Real-time monitoring and insights"
    },
    {
      icon: Users,
      title: "Expert Coordination",
      path: "/features/expert-coordination",
      description: "Seamless stakeholder integration"
    },
    {
      icon: BookOpen,
      title: "Curriculum Optimization",
      path: "/features/curriculum-optimization",
      description: "Dynamic learning materials"
    },
    {
      icon: Sparkles,
      title: "Talent Development",
      path: "/features/talent-development",
      description: "Nurturing potential and growth"
    }
  ];

  return (
    <div className="w-80 bg-gray-50 h-screen overflow-y-auto fixed left-0 top-0 border-r border-gray-200">
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2 mb-8">
          <Brain className="w-6 h-6 text-blue-600" />
          <span className="font-medium">Victory AI</span>
        </Link>
        
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
          Features Overview
        </h2>
        
        <div className="space-y-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isActive = location.pathname === feature.path;
            
            return (
              <Link
                key={feature.path}
                to={feature.path}
                className={`block p-3 rounded-lg transition-all ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <Icon className={`w-5 h-5 mt-0.5 ${
                    isActive ? 'text-blue-600' : 'text-gray-500'
                  }`} />
                  <div>
                    <div className={`font-medium ${
                      isActive ? 'text-blue-700' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </div>
                    <div className={`text-sm ${
                      isActive ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {feature.description}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}