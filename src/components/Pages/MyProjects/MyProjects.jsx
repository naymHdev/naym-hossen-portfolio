"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "@/data/projects";
import CardImage from "./CardImage";

const MyProjects = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData?.map((project, index) => (
          <div
            key={index}
            className=" border border-primaryColor bg-card custom-bg"
          >
            <CardImage images={project.images} details={project.details} />
            <div className="p-3">
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyProjects;
