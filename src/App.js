import React from 'react';
import Header from './componets/Header';
import About from './componets/About';
import WorkExperience from './componets/WorkExperience';


function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <Header/>
      <About/>
      <WorkExperience/>
    </div>
  );
}

export default App;
