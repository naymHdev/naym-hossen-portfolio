"use client";

import { useState } from "react";
import { FaBlog } from "react-icons/fa";
import Link from "next/link";
import {
  MdDashboard,
  MdHome,
  MdExpandMore,
  MdExpandLess,
  MdAdd,
  MdEditDocument,
} from "react-icons/md";
import { FaBloggerB } from "react-icons/fa6";

const role = "admin";

const AdminMenus = () => {
  // State to manage which submenu is open
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubMenu = (menuId) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };

  const menuItems = [
    {
      id: 1,
      items: [
        {
          icon: <MdHome />,
          label: "Home",
          href: "/",
          visible: ["admin"],
        },
        {
          icon: <MdDashboard />,
          label: "Dashboard",
          href: "/dashboard",
          visible: ["admin"],
        },
        {
          toggleIcon: openMenu == true ? <MdExpandLess /> : <MdExpandMore />,
          label: "Blog",
          icon: <FaBlog />,
          href: "#",
          visible: ["admin"],
          submenu: [
            {
              icon: <MdAdd />,
              label: "Add Blog",
              href: "/addBlog",
              visible: ["admin"],
            },
            {
              icon: <FaBloggerB />,
              label: "All Blogs",
              href: "/allBlogs",
              visible: ["admin"],
            },
            {
              icon: <MdEditDocument />,
              label: "Edit Blogs",
              href: "/editBlogs",
              visible: ["admin"],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="mt-4 text-sm h-screen overflow-scroll overflow-y-scroll">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-1" key={i.id}>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <div key={item.label}>
                  {/* Main menu item */}
                  <Link href={item.href}>
                    <div
                      className="flex items-center justify-center lg:justify-start gap-3 text-foreground py-2 md:px-2 rounded-md hover:text-primaryColor hover:bg-[#1C2E45] cursor-pointer"
                      onClick={() => item.submenu && toggleSubMenu(i.id)}
                    >
                      <div className="text-xl">{item.icon}</div>
                      <span className="hidden lg:block font-semibold">
                        {item.label}
                      </span>
                      <span className=" text-xl">
                        {item.toggleIcon && item.toggleIcon}
                      </span>
                    </div>
                  </Link>

                  {/* Submenu items */}
                  {item.submenu && openMenu === i.id && (
                    <div className="">
                      {item.submenu.map((subItem) => (
                        <Link
                          href={subItem.href}
                          key={subItem.label}
                          className="flex hover:text-primaryColor hover:bg-[#1C2E45] rounded-md items-center gap-3 text-foreground py-2 md:px-2"
                        >
                          <span className="text-xl">{subItem.icon}</span>
                          <span className="hidden lg:block font-semibold">
                            {subItem.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default AdminMenus;
