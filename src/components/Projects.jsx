export default function Projects() {
  const projects = [
    {
      title: "Toofan Express",
      description:
        "A dynamic React-based news website that fetches live data from a news API. Users can explore the latest headlines across categories like Sports, Entertainment, and Science.",
      stack: ["React", "JavaScript", "News API"],
    },
    {
      title: "Elevate",
      description:
        "A MERN stack platform that allows entrepreneurs to post their startup ideas, enabling investors to view and contact them directly.",
      stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    },
    {
      title: "Hand Gesture Recognition App",
      description:
        "A Streamlit-based ML app to help deaf and mute individuals communicate. It recognizes hand gestures and converts them into text and speech.",
      stack: ["Python", "Streamlit", "OpenCV", "CNN"],
    },
  ];

  return (
    <section id="projects" className="py-10 px-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.slice(0, 2).map((project, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-[#0a1f44] mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-[#142d5c] text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Centered third project */}
      <div className="mt-12 flex justify-center">
        <div className="w-full md:w-1/2 bg-white border rounded-xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-[#0a1f44] mb-2">{projects[2].title}</h3>
          <p className="text-gray-700 mb-4">{projects[2].description}</p>
          <div className="flex flex-wrap gap-2">
            {projects[2].stack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-[#142d5c] text-white rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
