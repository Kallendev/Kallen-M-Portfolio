import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="container mx-auto px-4 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About Me
            </h1>
            <div className="w-20 h-1 bg-[#00F0FF]"></div>
          </div>

          <div className="space-y-6 text-lg text-white leading-relaxed">
            <p>
              I'm <span className="text-white font-semibold">Kallen Mugambi</span>, a
              multidisciplinary creative professional who thrives at the intersection
              of software engineering, graphic design, and UI/UX design. My journey
              began with a fascination for how technology can transform ideas into
              tangible, impactful experiences.
            </p>

            <p>
              With a strong foundation in the{' '}
              <span className="text-[#00F0FF]">MERN stack</span> and modern web
              technologies, I build robust, scalable applications that don't just
              work—they delight users. But code is only part of the story. I believe
              that truly exceptional digital products are born when technical
              excellence meets thoughtful design.
            </p>

            <p>
              As a graphic designer, I craft visual identities that resonate and
              communicate. As a UI/UX designer, I advocate for the user at every
              stage of the design process, ensuring that interfaces are not only
              beautiful but also accessible, intuitive, and empowering. I'm driven by
              a deep commitment to{' '}
              <span className="text-white font-semibold">
                empathy, accessibility, and innovation
              </span>
              .
            </p>

            <div className="bg-gradient-to-r from-[#00F0FF]/10 to-transparent border-l-4 border-[#00F0FF] p-6 my-8">
              <p className="text-xl italic text-white">
                "Every pixel and every line of code should serve a purpose."
              </p>
            </div>

            <p>
              Whether I'm debugging a complex API, refining a color palette, or
              prototyping a new interaction pattern, I approach every challenge with
              curiosity and a relentless focus on quality. I'm constantly learning,
              experimenting, and pushing the boundaries of what's possible in the
              digital space.
            </p>

            <p>
              When I'm not designing or coding, you'll find me exploring the latest
              design trends, contributing to open-source projects, or sharing insights
              with the creative community. I believe in the power of collaboration and
              the importance of staying connected to the ever-evolving world of
              technology and design.
            </p>
          </div>

          <div className="pt-8">
            <Link
              to="/blog"
              className="group inline-flex items-center px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded-lg hover:bg-[#FF3366] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF3366]/50"
            >
              <Sparkles size={20} className="mr-2" />
              Kallensight
              <span className="ml-2 text-sm opacity-80">My Blog</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
