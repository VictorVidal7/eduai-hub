'use client';

import { useState } from 'react';

export default function AIContentGenerator() {
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('high');
  const [contentType, setContentType] = useState<'lesson' | 'quiz' | 'summary'>('lesson');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, level, contentType }),
      });
      
      const data = await response.json();
      setGeneratedContent(data.content);
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">AI Content Generator</h2>
      
      <div className="space-y-4">
        {/* Topic Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Topic
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Photosynthesis, World War II, Algebra"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
        </div>

        {/* Level Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Education Level
          </label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          >
            <option value="elementary">Elementary</option>
            <option value="middle">Middle School</option>
            <option value="high">High School</option>
            <option value="university">University</option>
            <option value="professional">Professional</option>
          </select>
        </div>

        {/* Content Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Content Type
          </label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="lesson"
                checked={contentType === 'lesson'}
                onChange={(e) => setContentType('lesson')}
                className="form-radio"
              />
              <span className="ml-2">Lesson</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="quiz"
                checked={contentType === 'quiz'}
                onChange={(e) => setContentType('quiz')}
                className="form-radio"
              />
              <span className="ml-2">Quiz</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="summary"
                checked={contentType === 'summary'}
                onChange={(e) => setContentType('summary')}
                className="form-radio"
              />
              <span className="ml-2">Summary</span>
            </label>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={loading || !topic}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Generating...' : 'Generate Content'}
        </button>

        {/* Generated Content Display */}
        {generatedContent && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">Generated Content:</h3>
            <div className="prose max-w-none">
              <pre className="whitespace-pre-wrap text-sm">
                {generatedContent}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}