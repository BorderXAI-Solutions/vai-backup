import React, { useState } from 'react';
import { Brain, Star, ChevronRight, Activity, LineChart, Trophy, Target } from 'lucide-react';
import { FeatureLayout } from './FeatureLayout';
import { ProgressChart } from './progress-tracking/ProgressChart';
import { MilestoneList } from './progress-tracking/MilestoneList';
import { InsightCard } from './progress-tracking/InsightCard';
import { ProfileSelector } from './personalized-learning/ProfileSelector';
import type { ChildProfile } from './FeatureTalentDiscovery';

const profiles: ChildProfile[] = [
  {
    id: '1',
    name: 'Emma',
    age: 8,
    avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
    lastActive: '2 days ago',
    skills: [
      { category: 'Mathematics', level: 3, progress: 85 },
      { category: 'Language Arts', level: 4, progress: 72 },
      { category: 'Science', level: 4, progress: 90 },
      { category: 'Music', level: 2, progress: 65 }
    ]
  },
  {
    id: '2',
    name: 'Lucas',
    age: 12,
    avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
    lastActive: '5 hours ago',
    skills: [
      { category: 'Mathematics', level: 4, progress: 92 },
      { category: 'Language Arts', level: 3, progress: 78 },
      { category: 'Science', level: 4, progress: 88 },
      { category: 'Music', level: 3, progress: 70 }
    ]
  }
];

const milestones = [
  {
    id: '1',
    title: 'Advanced Problem Solving',
    description: 'Completed advanced mathematics module with exceptional results',
    completed: true,
    date: '2 days ago'
  },
  {
    id: '2',
    title: 'Creative Writing Excellence',
    description: 'Authored a compelling short story demonstrating narrative skills',
    completed: true,
    date: '1 week ago'
  },
  {
    id: '3',
    title: 'Scientific Investigation',
    description: 'Currently working on independent research project',
    completed: false
  }
];

export function FeatureProgressTracking() {
  const [activeProfile, setActiveProfile] = useState<string>(profiles[0].id);
  const currentProfile = profiles.find(p => p.id === activeProfile);

  const progressData = currentProfile?.skills?.map(skill => ({
    subject: skill.category,
    progress: skill.progress,
    trend: skill.progress > 80 ? 'up' as const : 'stable' as const
  })) || [];

  return (
    <FeatureLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Progress Tracking</h1>
          </div>
          
          <p className="text-xl text-gray-600 mb-8">
            Monitor your child's educational journey with real-time insights and detailed analytics 
            that help you make informed decisions about their learning path.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <InsightCard
              title="AI-Powered Analytics"
              description="Victoria analyzes learning patterns to provide personalized insights"
              icon={<Brain className="w-6 h-6 text-blue-600" />}
            />
            <InsightCard
              title="Real-Time Monitoring"
              description="Track progress and achievements as they happen"
              icon={<Activity className="w-6 h-6 text-green-600" />}
              color="green"
            />
            <InsightCard
              title="Goal Setting"
              description="Set and monitor progress towards educational milestones"
              icon={<Target className="w-6 h-6 text-purple-600" />}
              color="purple"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Profile Selection */}
          <div className="lg:col-span-1">
            <ProfileSelector
              profiles={profiles}
              activeProfile={activeProfile}
              onProfileSelect={setActiveProfile}
            />
          </div>

          {/* Main Content Area - Progress Charts */}
          <div className="lg:col-span-3 space-y-8">
            {currentProfile && (
              <>
                <ProgressChart data={progressData} />
                <MilestoneList milestones={milestones} />

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Trophy className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Recent Achievements</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentProfile.skills?.map((skill, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <div>
                          <h4 className="font-medium text-gray-900">{skill.category}</h4>
                          <p className="text-sm text-gray-600">
                            Reached Level {skill.level} with {skill.progress}% mastery
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
}