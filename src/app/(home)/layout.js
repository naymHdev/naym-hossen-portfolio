import localFont from "next/font/local";
import "../globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Sidebar/MobileNavbar/Navbar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 700 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const geistUbuntu = localFont({
  src: "../fonts/UbuntuSans-VariableFont_wdth,wght.ttf",
  variable: "--font-geist-ubuntu",
  weight: "100 800",
});

export const metadata = {
  title: "Naym Hossen - Full Stack Developer Portfolio",
  description:
    "Explore the portfolio of Naym Hossen, a skilled Full Stack Developer specializing in MERN stack development. View projects, skills, and case studies.",
  keywords:
    "Full Stack Developer, MERN Stack, Naym Hossen, Portfolio, Web Development, React, Node.js, MongoDB",
  author: "Naym Hossen",
  openGraph: {
    type: "website",
    url: "https://your-portfolio-url.com", // Replace with actual URL
    title: "Naym Hossen - Full Stack Developer",
    description:
      "Discover projects and achievements of Naym Hossen, a passionate MERN Stack developer.",
    images: [
      {
        url: "/images/portfolio-cover.jpg", // Replace with actual image path
        width: 800,
        height: 600,
        alt: "Portfolio Cover",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistUbuntu.variable} antialiased`}
      >
        <div className=" grid grid-cols-1 md:grid-cols-5 ">
          <div className="col-span-full lg:col-span-2 lg:h-screen">
            <div className="hidden md:flex py-4 sm:py-6 lg:py-8">
              <Sidebar />
            </div>
            <div className="md:hidden flex ">
              <Navbar />
            </div>
          </div>
          <div className="col-span-full lg:col-span-3 mt-2 overflow-auto overflow-y-scroll h-screen overflow-x-hidden no-scrollbar container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            {children}
            <Footer />
          </div>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
