import Link from "next/link";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Page() {
  const backgroundColor = "#039BF0";
  return (
    <div
      className={`min-h-screen text-white flex flex-col justify-center items-start p-10`}
      style={{ backgroundColor }}
    >
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to Xpress</h1>
        <p className="text-lg mb-6 opacity-70">
          Your platform for seamless experiences.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/register"
          className="bg-white font-semibold py-3 px-6 rounded-md hover:bg-blue-100 transition duration-300"
          style={{ color: backgroundColor }}
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="bg-transparent border border-white font-semibold py-3 px-6 rounded-md hover:bg-blue-100 hover:text-blue-500 transition duration-300"
        >
          Sign In
        </Link>
      </div>
      <div className="absolute top-8 left-10 text-white font-bold text-xl">
        <Image src="/images/LOGO.png" width={143.34} height={30} alt="Logo" />
      </div>
      <div className="absolute bottom-0 right-0 p-10">
        <Image
          src="/images/Arrow.png"
          width={300}
          height={300}
          alt="arrowImage"
        />
      </div>
      <Toaster />
    </div>
  );
}
