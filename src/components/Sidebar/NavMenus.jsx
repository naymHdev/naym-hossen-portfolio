import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import GetInTouch from "../GetInTouch/GetInTouch";

const NavMenus = () => {
  return (
    <>
      <div className="">
        <div className="grid space-y-3 mt-12 text-title font-semibold">
          <Link href="/about" className="hover:text-primaryColor">
            About
          </Link>
          <Link href="/experience" className="hover:text-primaryColor">
            Experience
          </Link>
          <Link href="/projects" className="hover:text-primaryColor">
            Projects
          </Link>
          <Link href="/skills" className="hover:text-primaryColor">
            Skills
          </Link>
          <Link href="/blogs" className="hover:text-primaryColor">
            Blogs
          </Link>
        </div>
      </div>

      {/* contact us section */}
      <section className=" mt-32 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/naymHdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/naymhdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-[#31b6f4]" />
          </a>
          <a
            href="https://web.facebook.com/naymHdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl text-[#3572f5]" />
          </a>
          <a
            href="https://wa.me/8801770064053"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl text-[#35d2bf]" />
          </a>
        </div>
        <div>
          <GetInTouch />
        </div>
      </section>
    </>
  );
};

export default NavMenus;
