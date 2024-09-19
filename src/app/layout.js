import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" grid grid-cols-1 md:grid-cols-5 border border-primaryColor">
          <div className="col-span-full md:col-span-2 h-screen">
            <Sidebar />
          </div>
          <div className="col-span-full md:col-span-3 mt-2 overflow-auto overflow-y-scroll h-screen overflow-x-hidden no-scrollbar p-10">
            {children}
          </div>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
