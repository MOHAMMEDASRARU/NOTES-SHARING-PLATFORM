import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white p-4 shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">NoteHub</h1>
      </header>
      <main className="flex-grow p-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About NoteHub</h1>
        <p className="text-lg text-gray-700 mb-8">
          NoteHub is a comprehensive platform designed to support students and educators at Vellore Institute of Technology with resources, schedules, and interactive tools. Our mission is to streamline access to academic information and foster a collaborative learning environment.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
          <li><span className="font-bold">Course Syllabus and Notes:</span> Access detailed syllabus and hand written notes for various subjects for various semesters and departments including CSE (MIC) and (MID) and more.</li>
          <li><span className="font-bold">Chat & Bots:</span> Engage with interactive chat features and bots such as NoteRepBot, ExamRoastBot, and ComplimentBot for assistance and entertainment.</li>
          <li><span className="font-bold">Academic Resources:</span> Download documents and past papers for multiple semesters and courses directly from our public repository.</li>
          <li><span className="font-bold">Live Chat Support:</span> Get real-time assistance through our Live Chat Button integrated across the platform.</li>
          <li><span className="font-bold">How It Works:</span> A dedicated guide to help users navigate and make the most of NoteRep's features.</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Developer Information</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Mohammed Asrar U</h3>
          <p className="text-gray-700 mb-4">Lead Developer & Creator of NoteHub</p>
          <div className="flex space-x-4">
            <a href="mailto:asufarasufar@gmail.com" className="text-blue-600 hover:text-blue-800">
              Email
            </a>
            <a href="https://github.com/mohammedasrar800" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mohammed-asrar-u-b5498128a/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              LinkedIn
            </a>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
      </footer>
    </div>
  );
}
