import React from "react";

const Profile = () => {
  const tasks = [
    {
      id: 1,
      title: "Complete React Project",
      status: "Completed",
      priority: "High",
    },
    {
      id: 2,
      title: "Study Node.js",
      status: "Pending",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Push Code to GitHub",
      status: "Completed",
      priority: "Low",
    },
    {
      id: 4,
      title: "Prepare for Interview",
      status: "Pending",
      priority: "High",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">

            <img
              src="https://i.pravatar.cc/150?img=12"
              alt=""
              className="w-28 h-28 rounded-full border-4 border-white"
            />

            <div className="flex-1">
              <h1 className="text-3xl font-bold">Rohit Singh</h1>
              <p className="text-indigo-100 mt-1">
                MERN Stack Developer
              </p>

              <p className="mt-4 text-sm text-indigo-100">
                📧 rohit@gmail.com
              </p>

              <p className="text-sm text-indigo-100">
                📍 Noida, India
              </p>
            </div>

            <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
              Edit Profile
            </button>

          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-gray-500">Total Tasks</h3>
            <h1 className="text-4xl font-bold mt-3">24</h1>
          </div>

          <div className="bg-green-500 text-white rounded-2xl shadow-lg p-6">
            <h3>Completed</h3>
            <h1 className="text-4xl font-bold mt-3">16</h1>
          </div>

          <div className="bg-yellow-400 rounded-2xl shadow-lg p-6">
            <h3>Pending</h3>
            <h1 className="text-4xl font-bold mt-3">8</h1>
          </div>

          <div className="bg-red-500 text-white rounded-2xl shadow-lg p-6">
            <h3>High Priority</h3>
            <h1 className="text-4xl font-bold mt-3">5</h1>
          </div>

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8 mt-8">

          {/* Recent Tasks */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-6">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                Recent Tasks
              </h2>

              <button className="text-indigo-600 font-semibold">
                View All
              </button>
            </div>

            <div className="space-y-4">

              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="border rounded-xl p-4 flex justify-between items-center hover:shadow-md transition"
                >
                  <div>
                    <h3 className="font-semibold">
                      {task.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Priority : {task.priority}
                    </p>
                  </div>

                  <span
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      task.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h2 className="font-bold text-xl mb-4">
                Productivity
              </h2>

              <div className="space-y-4">

                <div>
                  <div className="flex justify-between">
                    <span>Completed</span>
                    <span>67%</span>
                  </div>

                  <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
                    <div className="w-2/3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between">
                    <span>Pending</span>
                    <span>33%</span>
                  </div>

                  <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
                    <div className="w-1/3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <h2 className="font-bold text-xl mb-4">
                Quick Actions
              </h2>

              <div className="space-y-3">

                <button className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700">
                  + Add New Task
                </button>

                <button className="w-full border border-indigo-600 text-indigo-600 py-3 rounded-xl hover:bg-indigo-50">
                  Edit Profile
                </button>

                <button className="w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600">
                  Logout
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;

 