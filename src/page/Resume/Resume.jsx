'use client';


const Resume = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        
        {/* Header */}
        <header className="border-b pb-4 mb-6 flex justify-between">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Atikur Rahman</h1>
          <p className="text-lg">MERN Stack Developer</p>
          <p>Dhaka,Bangladesh</p>

            </div>
         
          <div className="mt-2 text-sm text-gray-600 font-medium">
            <p> foysalatik33@gmail.com  </p>
            <p> (+88) 01822988250</p>
            <p className="mt-1">
              <a href="#" className="text-blue-600 hover:underline mr-4">GitHub</a>
              <a href="#" className="text-blue-600 hover:underline">Portfolio</a>
            </p>
          </div>
        </header>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-3">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800">Frontend</h3>
              <p>HTML5, CSS3, JavaScript, TailwindCSS, DaisyUI, NextUI, ReactJS, React Router, React Hook Form, React Query</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Backend</h3>
              <p>NodeJs, ExpressJs, Rest API, Firebase Auth, JWT (Basic), MongoDB</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Tools</h3>
              <p>VS Code, Git, Figma, Netlify, Vercel</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-3">Education</h2>
          <div className="text-sm">
            <p className="font-semibold">B.Sc. in CSE (2022 - Present)</p>
            <p className="text-gray-600">Green University of Bangladesh</p>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-3">Projects</h2>
          <div className="space-y-4 text-sm">
            
            <div>
              <h3 className="font-semibold text-gray-800">IEEE Website</h3>
              <p>Next.js + Tailwind CSS-based platform for managing IEEE events and activities.</p>
              <ul className="list-disc list-inside ml-4 text-gray-600">
                <li>Modern UI with Next.js & Tailwind CSS</li>
                <li>Event management with details</li>
                <li>Dynamic content with context-based state</li>
                <li>Role-based sections (future scope)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Student and Class Management</h3>
              <ul className="list-disc list-inside ml-4 text-gray-600">
                <li>Secure login/signup with Firebase</li>
                <li>Teacher role (Admin Approval)</li>
                <li>Course enrollment & payments</li>
                <li>Role-based dashboards for Admin, Teacher, Student</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Community Food Sharing Platform</h3>
              <ul className="list-disc list-inside ml-4 text-gray-600">
                <li>Food donation management</li>
                <li>Track donations & requests</li>
                <li>Request handling & food pickup system</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Brand Shop</h3>
              <ul className="list-disc list-inside ml-4 text-gray-600">
                <li>User authentication (Google/email)</li>
                <li>Car management (add, update, delete own cars)</li>
                <li>Brand browsing for all users</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-3">Languages</h2>
          <p className="text-sm text-gray-600">
            Fluent in <span className="font-medium">Bangla</span>, full working knowledge of <span className="font-medium">English</span>, and good understanding of <span className="font-medium">Hindi</span>.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Resume;
