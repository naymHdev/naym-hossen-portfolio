import NavMenus from "./NavMenus";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <section className="p-10 mx-auto max-w-7xl">
        <div className="">
          <Link href="/">
            <h1 className=" text-6xl font-extrabold text-title">Naym Hossen</h1>
          </Link>
          <p className=" text-2xl font-bold mt-2 text-foreground">
            Full-Stack Web Developer
          </p>
          <p className=" mt-6 font-mono text-foreground">
            Full Stack Developer with 1+ years of MERN stack expertise, building
            responsive, scalable web applications.
          </p>
        </div>
        <div>
          <NavMenus />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
