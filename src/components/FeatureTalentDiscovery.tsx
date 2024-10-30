import React, { useState } from 'react';
import { Brain, Sparkles } from 'lucide-react';
import { FeatureLayout } from './FeatureLayout';
import { ProfileSection } from './talent-discovery/ProfileSection';
import { ChatInterface } from './talent-discovery/ChatInterface';
import { SkillTree } from './talent-discovery/SkillTree';
import { TalentDiscoveryHero } from './talent-discovery/TalentDiscoveryHero';

export interface Message {
  id: string;
  sender: 'user' | 'victoria';
  content: string;
  timestamp: string;
  attachments?: {
    type: 'image' | 'file';
    url: string;
    name: string;
  }[];
}

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  avatar: string;
  lastActive: string;
  skills?: {
    category: string;
    level: number;
    progress: number;
  }[];
}

export function FeatureTalentDiscovery() {
  const [activeProfile, setActiveProfile] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'victoria',
      content: "Hi! I'm Victoria, your AI co-pilot for discovering your child's unique talents. Would you like to start by telling me about your child's interests?",
      timestamp: new Date().toISOString()
    }
  ]);

  const handleSendMessage = (content: string, attachments?: Message['attachments']) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content,
      timestamp: new Date().toISOString(),
      attachments
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <FeatureLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TalentDiscoveryHero />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ProfileSection 
              activeProfile={activeProfile}
              onProfileSelect={setActiveProfile}
            />
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            {activeProfile ? (
              <>
                <SkillTree profileId={activeProfile} />
                <ChatInterface 
                  messages={messages}
                  onSendMessage={handleSendMessage}
                />
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Select a Profile
                </h3>
                <p className="text-gray-600">
                  Choose a child's profile to start exploring their talents with Victoria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
}