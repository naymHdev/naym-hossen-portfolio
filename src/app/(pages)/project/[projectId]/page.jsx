"use client";
import { Suspense } from "react";
import CardImage from "@/components/Pages/MyProjects/CardImage";
import { projectsData } from "@/data/projects";
import { useParams } from "next/navigation";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import { FaArrowsToDot, FaCircleArrowRight } from "react-icons/fa6";
import { IoArrowRedoCircle } from "react-icons/io5";
import Loading from "@/components/Loading/Loading";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const cleanName = decodeURIComponent(projectId);

  const projects = projectsData?.filter(
    (project) => project.projectName == cleanName
  );

  return (
    <>
      <h1 className="text-6xl font-extrabold text-title">{cleanName}</h1>
      <Suspense fallback={<Loading />}>
        <section>
          {projects?.map((project) => (
            <div key={project.id}>
              <p className="text-foreground font-medium font-mono text-lg mt-3">
                {project.details}
              </p>
              <div className="mt-10">
                <CardImage images={project.images} details={project.details} />
              </div>
              <div>
                <h2 className="text-4xl font-extrabold text-primaryColor mt-10 mb-6">
                  Key Features
                </h2>
                {project.keyFeatures.map((features, index) => (
                  <div key={index + 1}>
                    <ul className="mt-4 text-foreground font-medium">
                      <li className=" flex gap-3">
                        <IoArrowRedoCircle className="text-title text-xl" />
                        {features}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="text-4xl font-extrabold text-primaryColor mt-10 mb-6">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <div key={index}>
                      <button className="px-3 py-1 text-primaryColor bg-card custom-bg transition-all hover:bg-[#061a2a]">
                        {tech}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-primaryColor mt-10 mb-6">
                  Source Code
                </h2>
                <div className="flex items-center gap-8 text-xl font-bold text-title">
                  {project.links.frontend && (
                    <>
                      <a
                        className="flex items-center gap-3"
                        href={project.links.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                        Frontend
                        <FaExternalLinkAlt className="text-primaryColor text-sm" />
                      </a>
                    </>
                  )}
                  {project.links.backend && (
                    <>
                      <a
                        className="flex items-center gap-3"
                        href={project.links.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                        Backend
                        <FaExternalLinkAlt className="text-primaryColor text-sm" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </Suspense>
    </>
  );
};

export default ProjectDetails;
