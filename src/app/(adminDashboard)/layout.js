import localFont from "next/font/local";
import "../globals.css";

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
          <div>{children}</div>
        </body>
      </html>
    </>
  );
};

export default DashboardLayout;
