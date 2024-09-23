"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "@/data/projects";
import CardImage from "./CardImage";
import Link from "next/link";
import { useState, useEffect } from "react";

const MyProjects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the skeleton (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading
          ? Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className=" bg-card  h-full flex flex-col animate-pulse"
                >
                  {/* Skeleton for the image */}
                  <div className="bg-gray-300 h-64 w-full rounded-md"></div>

                  {/* Skeleton for text and button */}
                  <div className="p-3 flex-grow flex flex-col">
                    <div className="h-6 bg-gray-300 w-3/4 mb-2 rounded"></div>
                    <div className="h-4 bg-gray-300 w-1/2 mb-4 rounded"></div>
                    <div className="mt-auto flex justify-end">
                      <div className="h-10 w-24 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              ))
          : projectsData?.map((project, index) => (
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
                      href={`/project/${encodeURIComponent(
                        project.projectName
                      )}`}
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
