import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const NavMenus = () => {
  return (
    <>
      <div className="">
        <div className="grid space-y-3 mt-12 text-title font-semibold">
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/blogs">Blogs</Link>
        </div>
      </div>

      {/* contact us section */}
      <section className=" mt-32">
        <div className="flex items-center space-x-4">
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
      </section>
    </>
  );
};

export default NavMenus;
