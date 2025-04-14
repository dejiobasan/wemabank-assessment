import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const backgroundColor = "#039BF0";
  return (
    <div
      className={`min-h-screen text-white flex flex-col justify-center items-start p-6 sm:p-10`}
      style={{ backgroundColor }}
    >
      
      <div className="absolute top-4 left-4 sm:top-8 sm:left-10 text-white font-bold text-lg sm:text-xl">
        <Image src="/images/LOGO.png" width={120} height={25} alt="Logo" />
      </div>

      <div className="mb-6 sm:mb-8 text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">
          Welcome to Xpress
        </h1>
        <p className="text-sm sm:text-lg mb-4 sm:mb-6 opacity-70">
          Your platform for seamless experiences.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link
          href="/register"
          className="bg-white font-semibold py-3 px-6 rounded-md hover:bg-blue-100 transition duration-300 text-center"
          style={{ color: backgroundColor }}
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="bg-transparent border border-white font-semibold py-3 px-6 rounded-md hover:bg-blue-100 hover:text-blue-500 transition duration-300 text-center"
        >
          Sign In
        </Link>
      </div>

      <div className="absolute bottom-4 right-4 sm:bottom-0 sm:right-0 p-6 sm:p-10">
        <Image
          src="/images/Arrow.png"
          width={200}
          height={200}
          alt="arrowImage"
          className="w-20 h-20 sm:w-48 sm:h-48"
        />
      </div>
    </div>
  );
}
