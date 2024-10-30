import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { FeatureTalentDiscovery } from './components/FeatureTalentDiscovery';
import { FeaturePersonalizedLearning } from './components/FeaturePersonalizedLearning';
import { FeatureProgressTracking } from './components/FeatureProgressTracking';
import { FeatureExpertCoordination } from './components/FeatureExpertCoordination';
import { FeatureCurriculumOptimization } from './components/FeatureCurriculumOptimization';
import { FeatureTalentDevelopment } from './components/FeatureTalentDevelopment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features/talent-discovery" element={<FeatureTalentDiscovery />} />
        <Route path="/features/personalized-learning" element={<FeaturePersonalizedLearning />} />
        <Route path="/features/progress-tracking" element={<FeatureProgressTracking />} />
        <Route path="/features/expert-coordination" element={<FeatureExpertCoordination />} />
        <Route path="/features/curriculum-optimization" element={<FeatureCurriculumOptimization />} />
        <Route path="/features/talent-development" element={<FeatureTalentDevelopment />} />
      </Routes>
    </Router>
  );
}

export default App;