"use client";
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
            <CardImage images={project.images} />
            <div className="p-3">
              <h2 className="text-2xl font-bold text-title">
                {project?.projectName}
              </h2>
              <p className="m-2 font-medium text-foreground">
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
