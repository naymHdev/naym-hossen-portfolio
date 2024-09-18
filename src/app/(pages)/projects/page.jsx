import Loading from "@/components/Loading/Loading";
import MyProjects from "@/components/Pages/MyProjects/MyProjects";
import RouteTitle from "@/components/RouteTitle";
import { Suspense } from "react";

const Projects = () => {
  return (
    <>
      <RouteTitle firstP="My" secondP="Projects" />
      <Suspense fallback={<Loading />}>
        <div className="mt-14">
          <MyProjects />
        </div>
      </Suspense>
    </>
  );
};

export default Projects;
