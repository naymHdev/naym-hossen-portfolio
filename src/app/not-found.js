"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  // You can use this effect to automatically redirect after a delay if needed
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        <a className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
          Go Back Home
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
