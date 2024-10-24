import localFont from "next/font/local";
import "../globals.css";
import DashBoardSidebar from "@/components/AdminDashboardComponents/DashBoardSidebar/DashBoardSidebar";
import Link from "next/link";
import Image from "next/image";
import AdminMenus from "@/components/AdminDashboardComponents/Menus/AdminMenus";

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

const DashboardLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${geistUbuntu.variable} antialiased`}
        >
          <div className=" min-h-screen flex">
            {/* LEFT */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-card">
              <Link
                href="/"
                className="flex flex-col items-center justify-center lg:justify-start gap-2"
              >
                <Image
                  src="/images/naym-logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
                <span className="hidden lg:block font-bold">Naym Hossen</span>
              </Link>
              <AdminMenus />
            </div>
            {/* RIGHT */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll flex flex-col p-10">
              {/* <DashBoardSidebar /> */}
              {children}
            </div>
          </div>
        </body>
      </html>
    </>
  );
};

export default DashboardLayout;
