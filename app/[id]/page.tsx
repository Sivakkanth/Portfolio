'use client'
import { ProjectDetails, Projects } from '@/public/data/projects';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';

export default function CryptoPage() {
    const params = useParams();
    const { id } = params;
    const [project, setProject] = useState<ProjectDetails>();

    useEffect(() => {
        const fetchProject = async () => {
            const projects = Projects.find(proj => proj.id === id);
            setProject(projects);
        }
        fetchProject();
    }, [id]);
    
    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Project Not Found</h1>
                <p className="text-center text-gray-300">The project you are looking for does not exist or has been removed.</p>
                <Link
                  href="/#project"
                  className="mt-4 inline-block bg-cyan-400 text-gray-900 px-6 py-2 rounded-lg hover:shadow-lg transition"
                >
                  Back to Projects
                </Link>
            </div>
        );
    }


  return (
    <div className="text-white min-h-screen bg-[#081b29]">
      {/* Header */}
      <header className="bg-[#081b29] fixed top-0 left-0 w-full flex items-center justify-center relative py-8 px-4 border-b border-cyan-500">
        <a href="/#project" className="absolute left-4 top-8 text-4xl md:text-5xl text-white hover:text-cyan-400">
          <BsArrowLeftCircle />
        </a>
        <h1 className="text-2xl mt-12 md:mt-0 md:text-4xl lg:text-5xl text-center font-bold">
          {project?.title}
        </h1>
      </header>

      {/* Preview Button */}
      <div className="flex justify-end px-4 md:px-16 lg:px-32 py-4">
        {project.previewUrl ? <Link
          href={project?.previewUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-400 text-[#081b29] px-6 py-2 rounded-lg mt-4 hover:shadow-lg transition"
        >
          Preview
        </Link> : <button onClick={() => alert("No abailable")} className='bg-cyan-400 text-[#081b29] px-6 py-2 rounded-lg mt-4 hover:shadow-lg transition'>Preview</button>}
      </div>

      {/* Main Content */}
      <main className="px-4 md:px-16 lg:px-32 py-8 space-y-6">
        {/* Description */}
        <section>
          <h3 className="text-cyan-400 text-xl md:text-2xl font-semibold mb-2">Description</h3>
          <p className="text-justify leading-relaxed">
            {project?.description}
          </p>
          <div className="mt-4">
            <iframe
              className="w-full h-96 sm:h-[75vh] rounded-lg"
              src={project?.youtubeEmbedUrl || ""}
              title={`${project?.title} Demo`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Key Features */}
        {(project?.keyFeatures?.length ?? 0) > 0 && <section>
          <h3 className="text-cyan-400 text-xl md:text-2xl font-semibold mb-2">Key Features</h3>
          <ul className="list-disc list-inside space-y-2">
            {project?.keyFeatures.map((feature, idx) => <li key={idx}>{feature}</li>)}
          </ul>
        </section>}

        {/* Technologies */}
        {(project?.technologies?.length ?? 0) > 0 && <section>
          <h3 className="text-cyan-400 text-xl md:text-2xl font-semibold mb-2">Technologies</h3>
          <ul className="list-disc list-inside space-y-1">
            {project?.technologies?.map((tech, idx) => <li key={idx}>{tech}</li>)}
          </ul>
        </section>}

        {/* Sources */}
        {(project?.sources?.length ?? 0) > 0 && <section>
          <h3 className="text-cyan-400 text-xl md:text-2xl font-semibold mb-2">Sources</h3>
          <ul className="list-disc list-inside space-y-1">
            {project?.sources.map((source, idx) => <li key={idx}><a className="text-cyan-400 hover:underline" href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}
          </ul>
        </section>}
      </main>
    </div>
  );
}