import Loading from "@/components/Loading/Loading";
import { Suspense } from "react";

const Experience = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div></div>
      </Suspense>
    </>
  );
};

export default Experience;
