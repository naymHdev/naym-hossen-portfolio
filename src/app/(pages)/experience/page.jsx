import Loading from "@/components/Loading/Loading";
import { experience } from "@/data/experience";
import { Suspense } from "react";
import ExperienceCard from "./experienceCard";

const Experience = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div>
          <h2 className="text-4xl font-semibold text-title">
            My Work <span className="text-primaryColor">Experience</span>
          </h2>
        </div>
        <section className="mt-14">
          <div>
            {experience?.map((itm, index) => (
              <ExperienceCard key={index} itm={itm} />
            ))}
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default Experience;
