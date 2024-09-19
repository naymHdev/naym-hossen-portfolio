import Loading from "@/components/Loading/Loading";
import { experience } from "@/data/experience";
import { Suspense } from "react";
import ExperienceCard from "./experienceCard";
import RouteTitle from "@/components/RouteTitle";
import Sudoku from "@/components/Games/Sudoku/Sudoku";

const Experience = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <RouteTitle firstP="My Work" secondP="Experience" />
        <section className="mt-14">
          <div className="">
            {experience?.map((itm, index) => (
              <ExperienceCard key={index} itm={itm} />
            ))}
          </div>
        </section>
        <Sudoku />
      </Suspense>
    </>
  );
};

export default Experience;
