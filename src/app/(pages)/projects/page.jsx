import MyProjects from "@/components/Pages/MyProjects/MyProjects";
import RouteTitle from "@/components/RouteTitle";

const Projects = () => {
  return (
    <>
      <RouteTitle firstP="My" secondP="Projects" />
      <div className="mt-14">
        <MyProjects />
      </div>
    </>
  );
};

export default Projects;
