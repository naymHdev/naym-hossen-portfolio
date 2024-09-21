import { GiSkills } from "react-icons/gi";
import { FaBlog, FaBusinessTime, FaFolder, FaUserCircle } from "react-icons/fa";

// Navigation routes with icons and names
export const navRoutes = [
  {
    icon: <FaUserCircle />,
    name: "About",
    route: "/about",
  },
  {
    icon: <FaBusinessTime />,
    name: "Experience",
    route: "/experience",
  },
  {
    icon: <FaFolder />,
    name: "Projects",
    route: "/projects",
  },
  {
    icon: <GiSkills />,
    name: "Skills",
    route: "/skills",
  },
  {
    icon: <FaBlog />,
    name: "Blogs",
    route: "/blogs",
  },
];
