"use client";

import { navRoutes } from "@/data/navRoutes";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <footer className="fixed bottom-0 w-full bg-card py-4 z-50">
        <nav className="flex justify-center space-x-8">
          {navRoutes.map((navItem, index) => (
            <a
              key={index}
              href={navItem.route}
              className={`group flex flex-col items-center text-xl ${
                pathname === navItem.route
                  ? "text-primaryColor"
                  : "text-title group-hover:text-primaryColor"
              }`}
            >
              <span className="hover:animate-bounce hover:duration-300 hover:transition-all">
                {navItem.icon}
              </span>
              <span className="text-[12px] font-semibold">{navItem.name}</span>
            </a>
          ))}
        </nav>
      </footer>
    </>
  );
};

export default Navbar;
