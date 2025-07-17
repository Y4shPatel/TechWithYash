import Projects from "../components/Projects";


export default function Home() {


  return (
    <div>

      {/* Intro Section */}
      <section id="intro" className="min-h-[60vh] flex flex-col justify-center items-center bg-[#f4f6fa] text-[#0a1f44] px-6">
  <img
    src="/Profile.jpeg"
    alt="Yash Patel"
    className="w-32 h-32 rounded-full mx-auto shadow-md mb-4 object-cover"
  />
  <h1 className="text-4xl font-bold mb-4">
    Hey, I'm Yash 👋
  </h1>
  <p className="text-lg text-gray-700 text-center max-w-xl">
    I’m someone who loves learning new tech and sharing it in the simplest way possible. Whether it’s through blogs or fun side projects, I enjoy helping others grow alongside me.
  </p>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#0a1f44]">Projects</h2>
        <Projects showOnly={2} />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white text-[#0a1f44]">
  <h2 className="text-3xl font-semibold text-center mb-6">👨‍💻 About Me</h2>
  <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
    <p>
      I’m Yash — a curious and enthusiastic developer who’s always up for learning something new. I’ve been exploring the world of tech, and along the way, I’ve fallen in love with making things easier for others.
    </p>
    <p>
      I pick up tools quickly and enjoy building things that feel practical and real. AI tools have been a big part of my journey — I love finding smart ways to use them to save time and simplify development.
    </p>
    <p>
      Through this website, I try to turn all that I learn into something helpful — whether it’s a guide, a project, or just a small tip that might help you out.
    </p>
    <p>
      Thanks for stopping by — hope you find something useful here! 🙂
    </p>
  </div>
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
