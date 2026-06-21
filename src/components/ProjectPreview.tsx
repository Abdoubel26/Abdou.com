import { Link, useParams } from "react-router-dom";
import { projects, type ProjectType } from "../constants";
import { ArrowLeft, ExternalLink } from "lucide-react";
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
    return ( <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-blue-950 to-gray-900"> <h1 className="text-5xl text-white font-bold">
    Project Not Found </h1> </div>
    );
    }

    const filteredProjects = projects.filter((p) => p.id !== project.id);

    for (let i = filteredProjects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredProjects[i], filteredProjects[j]] = [filteredProjects[j], filteredProjects[i]];
    }
    
    const otherProjects = filteredProjects.slice(0, 3);
  

    return ( <div className="min-h-screen bg-linear-to-b from-blue-950 to-gray-900 text-white pb-20">


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
