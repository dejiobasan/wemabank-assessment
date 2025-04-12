import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="p-4 rounded-full">
            <span className="">
              <Image
              src="/images/Icon-Pending.png"
              width={70}
              height={70}
              alt="arrowImage"
              />
            </span>
          </div>
          <h2 className="text-xl font-semibold text-yellow-600">Pending</h2>
          <p className="text-gray-600">
            Your registration is awaiting approval from our partnership team
          </p>
          <Link href="/login">
            <button className="w-[362px] mt-4 bg-blue-500 hover:bg-blue-400 text-white px-6 py-4 rounded-md">
              Done
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
