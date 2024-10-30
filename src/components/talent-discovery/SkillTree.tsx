import React from 'react';
import { Star } from 'lucide-react';

interface SkillTreeProps {
  profileId: string;
}

export function SkillTree({ profileId }: SkillTreeProps) {
  const skills = [
    { category: 'Creativity', level: 3, progress: 75 },
    { category: 'Analytical Thinking', level: 4, progress: 60 },
    { category: 'Communication', level: 2, progress: 40 },
    { category: 'Leadership', level: 3, progress: 85 }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Skill Development</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">{skill.category}</h4>
              <div className="flex">
                {Array.from({ length: skill.level }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 rounded-full h-2"
                style={{ width: `${skill.progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Level {skill.level} • {skill.progress}% to next level
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}