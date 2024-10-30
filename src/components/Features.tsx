import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Target, LineChart, Users, BookOpen, Sparkles } from 'lucide-react';

export function Features() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Talent Discovery",
      description: "Comprehensive evaluation of your child's abilities across multiple domains using advanced AI technology",
      path: "/features/talent-discovery",
      image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Personalized Learning Path",
      description: "Custom educational strategies tailored to your child's unique abilities, interests, and goals",
      path: "/features/personalized-learning",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80"
    },
    {
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      title: "Progress Tracking",
      description: "Real-time monitoring and adjustment of educational strategies based on continuous performance data",
      path: "/features/progress-tracking",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Program Matching",
      description: "Seamless integration with schools, tutors, and coaches for optimal educational outcomes",
      path: "/features/expert-coordination",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Curriculum Optimization",
      description: "Dynamic adjustment of learning materials and approaches based on your child's progress",
      path: "/features/curriculum-optimization",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "College Admission",
      description: "Identification and nurturing of hidden talents and potential across various domains",
      path: "/features/talent-development",
      image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Holistic Education Management System for Parents
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Cutting-edge AI technology meets educational expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
              onClick={() => navigate(feature.path)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}