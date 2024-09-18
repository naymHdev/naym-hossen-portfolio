import { GoDash } from "react-icons/go";
const ExperienceCard = ({ itm }) => {
  const {
    companyName,
    jobTitle,
    experienceDetails,
    joiningDate,
    quitDate,
    technologyUsed,
    projectsName,
  } = itm || {};

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 border-b border-b-primaryColor border-dashed py-6">
        <section className="col-span-full md:col-span-2">
          <div>
            <h3 className="text-xl font-bold text-title mb-6">{jobTitle}</h3>

            <a href="#" className="font-semibold text-lg text-primaryColor">
              {companyName}
            </a>
          </div>
          <div className="mt-6 text-foreground font-semibold text-lg flex items-center gap-1 flex-wrap">
            <p>{joiningDate}</p>
            <GoDash className="text-foreground text-lg" />
            <p>{quitDate}</p>
          </div>
        </section>
        <section className="col-span-full md:col-span-4">
          <div>
            <p className=" font-medium text-foreground">{experienceDetails}</p>
            <h3 className="font-bold text-left from-foreground mt-6 md:mt-10">
              Technology Used
            </h3>
            <div className="flex flex-wrap gap-1 mt-2">
              {technologyUsed?.map((tech, index) => (
                <div key={index}>
                  <button className="px-4 py-1 text-sm font-thin bg-card text-primaryColor rounded-full">
                    {tech}
                  </button>
                </div>
              ))}
            </div>
            <h3 className="font-bold text-left from-foreground mt-6 md:mt-10">
              Projects
            </h3>
            <div className="flex flex-wrap gap-1 mt-2">
              {projectsName?.map((project, index) => (
                <div key={index}>
                  <h2 className=" font-bold text-xl text-title">{project}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExperienceCard;
