import { Link, useParams } from "react-router-dom";
import { projects, type ProjectType } from "../constants";
// 🟢 Imported Download icon
import { ArrowLeft, ExternalLink, Download, Globe, Puzzle, Settings } from "lucide-react"; 
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";

function ProjectPreview() {
    const { id } = useParams();

    const project: ProjectType | undefined = projects.find(
      (pjt) => pjt.id.toString() === id
    );

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    if (!project) {
      return ( 
        <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-blue-950 to-gray-900"> 
          <h1 className="text-5xl text-white font-bold">Project Not Found</h1> 
        </div>
      );
    }

    const filteredProjects = projects.filter((p) => p.id !== project.id);

    for (let i = filteredProjects.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredProjects[i], filteredProjects[j]] = [filteredProjects[j], filteredProjects[i]];
    }
    
    const otherProjects = filteredProjects.slice(0, 3);
  
    return ( 
      <div className="min-h-screen bg-linear-to-b from-blue-950 to-gray-900 text-white pb-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">

            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 mb-10 hover:text-amber-300 transition"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>

            <div className="bg-linear-to-br from-amber-200 to-amber-400 rounded-3xl p-6 lg:p-10 text-black shadow-2xl">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <img
                      src={project.image}
                      alt={project.title}
                      className="h-28 lg:h-40 rounded-3xl"
                  />

                  <div>
                      <h1 className="text-5xl lg:text-7xl outfit font-bold">
                        {project.title}
                      </h1>

                      <p className="text-lg mt-4 max-w-3xl poppins">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mt-6">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition"
                        >
                            <FaGithub size={18} />
                            Source Code
                        </a>

                        {project.downloadLink && (
                            <a
                            href={project.downloadLink}
                            download
                            className="bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition font-semibold"
                            >
                            <Download size={18} />
                            Download Extension (.zip)
                            </a>
                        )}

                        {project.previewLink && (
                            <a
                            href={project.previewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition"
                            >
                            <ExternalLink size={18} />
                            Live Preview
                            </a>
                        )}
                      </div>
                  </div>
                </div>
            </div>

            {project.downloadLink && (
              <section className="mt-14">
                <h2 className="text-3xl font-bold outfit mb-6 flex items-center gap-2">
                  <Globe className="text-amber-300" /> How to Install in Chrome
                </h2>

                <div className="bg-gray-800 rounded-3xl p-8 border border-blue-900 shadow-xl">
                  <p className="text-gray-300 mb-6 poppins">
                    Since this is a custom productivity extension not yet published on the Chrome Web Store, you can manually load it into your browser in under 60 seconds! Follow these simple steps:
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gray-900 p-5 rounded-2xl border border-gray-700 relative">
                      <span className="absolute -top-3 -left-3 bg-amber-300 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                      <Download className="text-blue-400 mb-3" size={28} />
                      <h4 className="font-bold text-lg mb-2">Download & Extract</h4>
                      <p className="text-sm text-gray-400">Click the blue download button above. Extract the downloaded <code className="text-amber-300">.zip</code> file onto your computer.</p>
                    </div>

                    <div className="bg-gray-900 p-5 rounded-2xl border border-gray-700 relative">
                      <span className="absolute -top-3 -left-3 bg-amber-300 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                      <Settings className="text-green-400 mb-3" size={28} />
                      <h4 className="font-bold text-lg mb-2">Open Extensions</h4>
                      <p className="text-sm text-gray-400">Open Chrome and enter <code className="text-amber-300 font-mono">chrome://extensions/</code> into your browser's address bar.</p>
                    </div>

                    <div className="bg-gray-900 p-5 rounded-2xl border border-gray-700 relative">
                      <span className="absolute -top-3 -left-3 bg-amber-300 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                      <Globe className="text-amber-300 mb-3" size={28} />
                      <h4 className="font-bold text-lg mb-2">Developer Mode</h4>
                      <p className="text-sm text-gray-400">Enable the <span className="font-bold text-white">Developer mode</span> switch in the top-right corner of your extensions page.</p>
                    </div>

                    <div className="bg-gray-900 p-5 rounded-2xl border border-gray-700 relative">
                      <span className="absolute -top-3 -left-3 bg-amber-300 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
                      <Puzzle className="text-purple-400 mb-3" size={28} />
                      <h4 className="font-bold text-lg mb-2">Load Unpacked</h4>
                      <p className="text-sm text-gray-400">Click <span className="font-bold text-white">"Load unpacked"</span> in the top-left and select the folder you extracted in Step 1.</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {project.screenshot && (
              <section className="mt-14">
                  <h2 className="text-3xl font-bold outfit mb-6">
                  Project Preview
                  </h2>

                  <div className="overflow-hidden rounded-3xl border-2 border-blue-700 shadow-2xl">
                  <img
                      src={project.screenshot}
                      alt={`${project.title} screenshot`}
                      className="w-full"
                  />
                  </div>
              </section>
            )}

            <section className="mt-14">
              <h2 className="text-3xl font-bold outfit mb-6">
                  About The Project
              </h2>

              <div className="bg-gray-800 rounded-3xl p-8">
                  <p className="text-lg leading-relaxed text-gray-200">
                  {project.longDescription}
                  </p>
              </div>
            </section>

            <section className="mt-14">
              <h2 className="text-3xl font-bold outfit mb-6">
                  Tech Stack
              </h2>

              <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                  <span
                      key={tech}
                      className="bg-amber-300 text-black px-4 py-2 rounded-full font-semibold"
                  >
                      {tech}
                  </span>
                  ))}
              </div>
            </section>

            <section className="mt-14">
              <h2 className="text-3xl font-bold outfit mb-6">
                  Key Features
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.features.map((feature) => (
                  <div
                      key={feature}
                      className="bg-gray-800 rounded-2xl p-5 border border-blue-800"
                  >
                      <p className="font-medium">
                      {feature}
                      </p>
                  </div>
                  ))}
              </div>
            </section>

            <section className="mt-20">
              <h2 className="text-4xl font-bold outfit mb-8 text-center">
                  Other Projects
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {otherProjects.map((p) => (
                  <Link
                      key={p.id}
                      to={`/project/${p.id}`}
                  >
                      <div className="bg-linear-to-br from-amber-200 to-amber-400 text-black rounded-2xl p-5 hover:scale-[1.02] transition">

                      <div className="flex items-center gap-3 mb-4">
                          <img
                          src={p.image}
                          alt={p.title}
                          className="h-12 rounded-xl"
                          />

                          <h3 className="font-bold text-xl">
                          {p.title}
                          </h3>
                      </div>

                      <p className="text-sm">
                          {p.description}
                      </p>

                      </div>
                  </Link>
                  ))}
              </div>
            </section>

        </div>
      </div>
    );
}

export default ProjectPreview;