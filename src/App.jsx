// App.jsx
import React from 'react';
import { BarChart, Activity, Users, Binary, BookOpen } from 'lucide-react';

// Custom Card Components
const Card = ({ className = '', children }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

const CardContent = ({ className = '', children }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

// Slide Component
const Slide = ({ title, children, icon: Icon }) => (
  <Card className="mb-8 w-full">
    <CardContent>
      <div className="flex items-center mb-4">
        {Icon && <Icon className="w-6 h-6 mr-2 text-blue-600" />}
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </CardContent>
  </Card>
);

// Main Presentation Component
const Presentation = () => (
  <div className="max-w-4xl mx-auto p-6 space-y-8">
    {/* Title Slide */}
    <Slide title="Healthcare Data Analytics Project">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Healthcare Data Analytics</h1>
        <p className="text-xl text-gray-600">Patient Classification & Personalized Treatment</p>
      </div>
    </Slide>

    {/* Project Overview */}
    <Slide title="Project Overview" icon={Activity}>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Dataset</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>55,500 records</li>
          <li>15 features (numerical & categorical)</li>
          <li>Class distribution: 66.7% / 33.3%</li>
        </ul>
      </div>
    </Slide>

    {/* Methodology */}
    <Slide title="Methodology" icon={Binary}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="font-semibold">Data Preprocessing</h3>
          <ul className="list-disc ml-6">
            <li>Missing value imputation</li>
            <li>Feature scaling</li>
            <li>One-hot encoding</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Feature Engineering</h3>
          <ul className="list-disc ml-6">
            <li>Length of Stay</li>
            <li>Interaction terms</li>
            <li>High Billing Indicator</li>
          </ul>
        </div>
      </div>
    </Slide>

    {/* Results */}
    <Slide title="Model Performance" icon={BarChart}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Metrics</h3>
            <ul className="space-y-1">
              <li>Accuracy: 1.0</li>
              <li>Precision: 1.0</li>
              <li>Recall: 1.0</li>
              <li>F1-score: 1.0</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Key Findings</h3>
            <ul className="space-y-1">
              <li>Perfect scores achieved</li>
              <li>Potential data leakage</li>
              <li>Further investigation needed</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>

    {/* Personalized Treatment */}
    <Slide title="Personalized Treatment Framework" icon={Users}>
      <div className="space-y-4">
        <h3 className="font-semibold">Case Study: Bobby Jackson</h3>
        <div className="bg-blue-50 p-4 rounded">
          <p className="mb-2">Treatment Success Probabilities:</p>
          <ul className="space-y-2">
            <li>Treatment B: 93.77%</li>
            <li>Treatment C: 88.30%</li>
            <li>Treatment A: 79.36%</li>
          </ul>
        </div>
      </div>
    </Slide>

    {/* Next Steps */}
    <Slide title="Next Steps">
      <div className="space-y-4">
        <ul className="list-disc ml-6 space-y-2">
          <li>Investigate preprocessing for data leakage</li>
          <li>Implement advanced clustering analysis</li>
          <li>Validate with external dataset</li>
          <li>Enhance feature engineering</li>
        </ul>
      </div>
    </Slide>

    {/* Resources */}
    <Slide title="Project Resources" icon={BookOpen}>
      <div className="space-y-4">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Google Colab Notebook</h3>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <a 
              href="https://colab.research.google.com/drive/1limBayUeRSrJoyUouQHZfpcNKl8h2iFR?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Open Project Notebook
            </a>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Access the complete analysis, code, and detailed documentation in our Google Colab notebook
          </p>
        </div>
      </div>
    </Slide>
  </div>
);

export default Presentation;