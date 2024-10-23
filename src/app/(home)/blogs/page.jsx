import Loading from "@/components/Loading/Loading";
import { Suspense } from "react";

const Blogs = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col items-center justify-center h-screen text-primaryColor font-extrabold text-5xl">
          <h2>Coming soon...</h2>
        </div>
      </Suspense>
    </>
  );
};

export default Blogs;
