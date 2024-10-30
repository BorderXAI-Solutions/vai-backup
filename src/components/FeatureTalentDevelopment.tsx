import React from 'react';
import { GraduationCap, ChevronRight, BookOpen, Users, Brain, Microscope, Calculator, Shapes } from 'lucide-react';
import { FeatureLayout } from './FeatureLayout';

export function FeatureTalentDevelopment() {
  const programs = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Leadership Development",
      description: "Develop essential leadership skills and qualities for future success"
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Impacter Incubator",
      description: "Transform innovative ideas into impactful projects"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Leadership Certification",
      description: "Earn recognized credentials in leadership excellence"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Research Internships & Courses",
      description: "Gain hands-on experience in real research environments"
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "English & Writing",
      description: "Master communication skills essential for academic success"
    },
    {
      icon: <Microscope className="w-8 h-8 text-blue-600" />,
      title: "Health Sciences & Pre-Med",
      description: "Prepare for a future in healthcare and medicine"
    },
    {
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      title: "Math & Computer Science",
      description: "Excel in quantitative and computational thinking"
    },
    {
      icon: <Shapes className="w-8 h-8 text-blue-600" />,
      title: "Electives",
      description: "Explore diverse subjects to broaden your academic horizons"
    }
  ];

  return (
    <FeatureLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">College Admission Consulting</h1>
          
          <div className="prose prose-lg">
            <p className="text-xl text-gray-600 mb-8">
              With a team of dedicated consultants and former admissions officers from colleges and universities across the U.S., we offer expert guidance to maximize students' chances of admission to their target schools.
            </p>

            <div className="bg-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h2>
              <p className="text-gray-700 mb-6">
                It's never too early or too late to meaningfully prepare for the next step in your child's college prep journey. We believe a strong foundation of social and emotional skills can support and amplify a student's academic interests.
              </p>
              <div className="flex items-center space-x-4">
                <GraduationCap className="w-12 h-12 text-blue-600" />
                <p className="text-blue-800 font-medium">
                  Each program is designed to help students develop academically, personally, and socially.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" 
            alt="College admission preparation"
            className="w-full h-72 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Why Choose Our Program?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <p>Expert guidance from experienced admissions officers</p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <p>Comprehensive development of academic and personal skills</p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <p>Personalized strategy for college applications</p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <p>Holistic approach to student development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
}