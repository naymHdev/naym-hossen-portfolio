import Image from "next/image";
import logo from "../../public/images/naym-logo.png";

const Sidebar = () => {
  return (
    <>
      <section className="py-6">
        <div>
          <Image
            src={logo}
            hight={250}
            width={250}
            priority
            alt="Naym Hossen Portfolio Image"
          />
        </div>
        <div className="mt-6">
          <h1 className=" text-6xl font-extrabold text-title">Naym Hossen</h1>
          <p className=" text-2xl font-bold mt-2 text-foreground">
            Full-Stack Web Developer
          </p>
          <p className=" mt-6 font-mono text-foreground">
            Full Stack Developer with 1+ years of MERN stack expertise, building
            responsive, scalable web applications.
          </p>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
