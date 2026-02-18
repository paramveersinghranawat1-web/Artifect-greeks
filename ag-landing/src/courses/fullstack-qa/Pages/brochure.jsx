import React from 'react';
import { courseData } from '../data/content';

const Brochure = () => {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <header className="border-b-4 border-blue-600 pb-6 mb-10">
          <h1 className="text-4xl font-black text-gray-900 uppercase italic">
            {courseData.name} <span className="text-blue-600">Syllabus</span>
          </h1>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {courseData.syllabus.map((topic, i) => (
            <div key={i} className="flex gap-4 p-4 border rounded-xl hover:shadow-md transition">
              <span className="text-3xl font-bold text-blue-100">0{i+1}</span>
              <p className="font-bold text-gray-700 self-center">{topic}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Ready to start?</h2>
            <p className="text-gray-400">Download the full 50-page PDF guide.</p>
          </div>
          <button className="mt-6 md:mt-0 bg-blue-600 px-8 py-3 rounded-full font-bold">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Brochure;