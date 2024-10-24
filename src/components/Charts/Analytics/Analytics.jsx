"use client";

import Image from "next/image";

const Analytics = () => {
  return (
    <>
      <div className=" flex flex-wrap gap-4">
        <section className=" flex flex-col items-start text-white bg-[#0F3137] rounded-md shadow-md p-6 w-[220px]">
          <Image
            src="/icons/analytics/research.png"
            alt="Analytics"
            height={50}
            width={60}
          />
          <h4 className=" text-2xl font-extrabold mt-4">
            900<span>K</span>
          </h4>
          <p className="font-bold mt-1">Blog Page Views</p>
        </section>
        <section className=" flex flex-col items-start text-white bg-[#3D2A24] rounded-md shadow-md p-6 w-[220px]">
          <Image
            src="/icons/analytics/global-connection.png"
            alt="Analytics"
            height={50}
            width={60}
          />
          <h4 className=" text-2xl font-extrabold mt-4">
            90.9<span>%</span>
          </h4>
          <p className="font-bold mt-1">Server Up</p>
        </section>
        <section className=" flex flex-col items-start text-white bg-[#0E344C] rounded-md shadow-md p-6 w-[220px]">
          <Image
            src="/icons/analytics/audience.png"
            alt="Analytics"
            height={50}
            width={60}
          />
          <h4 className=" text-2xl font-extrabold mt-4">
            9000<span>K</span>
          </h4>
          <p className="font-bold mt-1">Blog Visitors</p>
        </section>
        <section className=" flex flex-col items-start text-white bg-[#2D244F] rounded-md shadow-md p-6 w-[220px]">
          <Image
            src="/icons/analytics/new-employee.png"
            alt="Analytics"
            height={50}
            width={60}
          />
          <h4 className=" text-2xl font-extrabold mt-4">
            2000<span>K</span>
          </h4>
          <p className="font-bold mt-1">Blog New Users</p>
        </section>
      </div>
    </>
  );
};

export default Analytics;
