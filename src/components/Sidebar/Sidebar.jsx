import NavMenus from "./NavMenus";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <section className="p-5 lg:p-10 mx-auto max-w-7xl">
        <div className="">
          <Link href="/">
            <h1 className=" text-3xl lg:text-6xl font-extrabold text-title">
              Naym Hossen
            </h1>
          </Link>
          <p className=" text-2xl font-bold mt-2 text-foreground">
            Full-Stack Web Developer
          </p>
          <p className=" mt-6 font-mono text-foreground">
            Full Stack Developer with 1+ years of MERN stack expertise, building
            responsive, scalable web applications.
          </p>
          <div className="group">
            <button className=" text-primaryColor font-extrabold text-lg mt-6">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Get my resume
              </a>
            </button>
            <div className="border-b-2 border-b-title group-hover:border-b-primaryColor w-12 group-hover:w-[125px] mt-[2px] transition-all duration-300" />
          </div>
        </div>
        <div>
          <NavMenus />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
