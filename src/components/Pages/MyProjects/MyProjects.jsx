"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "@/data/projects";
import CardImage from "./CardImage";
import Link from "next/link";

const MyProjects = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData?.map((project, index) => (
          <div
            key={index}
            className="border border-primaryColor bg-card custom-bg h-full flex flex-col"
          >
            <CardImage images={project.images} details={project.details} />
            <div className="p-3 flex-grow flex flex-col">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-title">
                  {project?.projectName}
                </h2>
                <a
                  href={project?.links?.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="text-primaryColor text-lg" />
                </a>
              </div>
              <p className="m-2 font-medium text-foreground text-lg">
                {project?.details}
              </p>

              <div className="mt-auto flex justify-end">
                <Link
                  href={`/project/${encodeURIComponent(project.projectName)}`}
                >
                  <button className="text-primaryColor font-extrabold text-sm bg-card border-none custom-bg px-3 py-2">
                    Full Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyProjects;
