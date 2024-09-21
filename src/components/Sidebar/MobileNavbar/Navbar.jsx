"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <HiMiniBars3BottomRight className="block h-6 w-6 text-title" />
              ) : (
                <RxCross2 className="block h-6 w-6 text-title" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <motion.div
        initial={{ x: isOpen ? "100%" : "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className={clsx(
          "lg:hidden fixed inset-y-0 left-0 w-64 bg-gray-800 z-50",
          { "translate-x-0": isOpen, "-translate-x-full": !isOpen }
        )}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/about">
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </p>
          </Link>
          <Link href="/experience">
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Experience
            </p>
          </Link>
          <Link href="/projects">
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </p>
          </Link>
          <Link href="/skills">
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Skills
            </p>
          </Link>
          <Link href="/blogs">
            <p className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Blogs
            </p>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
