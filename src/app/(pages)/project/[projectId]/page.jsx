"use client";
import { projectsData } from "@/data/projects";
import { useParams } from "next/navigation";

const ProjectDetails = () => {
  const { projectId } = useParams();

  const projects = projectsData?.filter((project) => project.id == projectId);
  console.log("projects__", projects);

  return (
    <div>
      <h1 className="text-3xl font-bold">Project: {projectId}</h1>
    </div>
  );
};

export default ProjectDetails;
