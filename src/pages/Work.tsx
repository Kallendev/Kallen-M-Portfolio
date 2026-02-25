import { useEffect, useState } from "react";
import { ExternalLink, Github, Clock, Sparkles } from "lucide-react";
import { projects as PROJECTS, Project } from "../data/projects";

const Work = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch (so your loader still works)
    setProjects(PROJECTS);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-[#00F0FF] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="container mx-auto px-4 lg:px-8 py-20 md:py-32">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">My Work</h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
              A selection of projects showcasing my skills in software development,
              design, and problem-solving.
            </p>
            <div className="w-20 h-1 bg-[#00F0FF] mx-auto"></div>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">Projects coming soon. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-2xl border border-gray-800 hover:border-[#00F0FF] transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-[#00F0FF]/30 flex flex-col transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#00F0FF]/5 rounded-full blur-3xl group-hover:bg-[#00F0FF]/10 transition-all duration-500"></div>

                  {project.image_url && (
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {project.featured && (
                        <div className="absolute top-4 right-4 z-20">
                          <div className="px-3 py-1 bg-[#FF3366]/90 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-[#FF3366] flex items-center gap-1 shadow-lg">
                            <Sparkles size={12} />
                            Featured
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="relative p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00F0FF] transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-white text-base leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    {project.tech_stack?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech_stack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 text-xs font-semibold bg-[#00F0FF]/10 text-[#00F0FF] rounded-lg border border-[#00F0FF]/20 hover:bg-[#00F0FF]/20 transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-3">
                      {project.live_url ? (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 group/btn relative overflow-hidden flex items-center justify-center gap-2 px-5 py-3 bg-[#00F0FF] text-black text-sm font-bold rounded-xl hover:bg-[#FF3366] transition-all duration-300 shadow-lg shadow-[#00F0FF]/25 hover:shadow-xl hover:shadow-[#FF3366]/40"
                        >
                          <ExternalLink size={18} className="relative z-10" />
                          <span className="relative z-10">View Live</span>
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                        </a>
                      ) : (
                        <div className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gray-800/50 text-gray-500 text-sm font-semibold rounded-xl border border-gray-700 cursor-not-allowed">
                          <Clock size={18} />
                          Coming Soon
                        </div>
                      )}

                      {project.repo_url && (
                        <a
                          href={project.repo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center justify-center gap-2 px-5 py-3 bg-transparent text-[#00F0FF] text-sm font-bold rounded-xl border-2 border-[#00F0FF] hover:bg-[#00F0FF] hover:text-black transition-all duration-300"
                        >
                          <Github size={18} />
                          <span className="hidden sm:inline">Code</span>
                        </a>
                      )}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Work;