import Projects from "../components/Projects";


export default function Home() {


  return (
    <div>

      {/* Intro Section */}
      <section id="intro" className="min-h-[60vh] flex flex-col justify-center items-center bg-[#f4f6fa] text-[#0a1f44] px-6">
        <h1 className="text-4xl font-bold mb-4">Hey, I'm Yash 👋</h1>
        <p className="text-lg max-w-xl text-center">
          I'm a developer who loves building fast, useful tools and breaking down complex tech into simple ideas.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#0a1f44]">Projects</h2>
        <Projects showOnly={2} />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#0a1f44]">About Me</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-700">
          I enjoy solving real problems with clean code. From cloud tools to full-stack web apps, I love making tech simple for others.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#0a1f44]">Get In Touch</h2>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
          <a href="mailto:ycp300604@gmail.com" className="text-blue-600 hover:underline">Email</a>
          <a href="https://www.linkedin.com/in/yash-patel-84b182270/" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
        </div>
      </section>

    </div>
  );
}
