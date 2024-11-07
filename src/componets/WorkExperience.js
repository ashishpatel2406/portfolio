import React from 'react'

const WorkExperience = () => {
  return (
    <div>
        <section className="w-full max-w-3xl px-6 py-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Work Experience</h2>
      
      {/* Experience 1 */}
      <div className="mb-6 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-xl font-bold">Indian Space Research Organisation (ISRO)</h3>
        <p className="text-sm text-gray-400">Research Trainee | SRTD-Ahmedabad</p>
        <p className="text-gray-300 mt-2">Conducted anomaly detection using hyperspectral images for advanced research projects contributing to national space missions and technological advancements.</p>
      </div>
      
      {/* Experience 2 */}
      <div className="mb-6 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-xl font-bold">Defence Research and Development Organisation (DRDO)</h3>
        <p className="text-sm text-gray-400">Project Intern | RCI-Hyderabad</p>
        <p className="text-gray-300 mt-2">Developed a Security Information and Event Management (SIEM) system, optimizing log reception using UDP sockets...</p>
      </div>
    </section>
    </div>
  )
}

export default WorkExperience