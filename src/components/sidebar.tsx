"use client";

import {
  UsersIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BellDot, Tags, Banknote } from "lucide-react";
import Image from "next/image";

const sidebarItems = [
  {
    name: "Verifiers",
    route: "/dashboard/verifiers",
    icon: <UsersIcon className="w-5 h-5 m-4" />,
  },
  {
    name: "Deals",
    route: "/dashboard/deals",
    icon: <Tags size={20} className="m-4 transform rotate-90" />,
  },
  {
    name: "Transactions",
    route: "/dashboard/transactions",
    icon: <Banknote size={20} className="m-4" />,
  },
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [active, setActive] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeItem = sidebarItems.find((item) => item.route === currentPath);
    if (activeItem) {
      setActive(activeItem.name);
    }
  }, []);

  return (
    <div className="flex h-screen overflow-x-hidden">
      <div className="bg-white w-64 px-4 py-6 flex flex-col shadow-md">
        <div className="text-blue-500 font-bold text-xl mb-15 ml-7">
          <Image
            src="/images/LOGO2.png"
            width={143.34}
            height={30}
            alt="Logo"
          />
        </div>
        <div className="flex flex-col space-y-7 ml-2 mr-2">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                router.push(item.route);
              }}
              className={`flex items-center text-gray-700 ${
                active === item.name ? "bg-[#F2FAFF]" : "hover:bg-[#F2FAFF]"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <nav className="flex items-center justify-between bg-white shadow-sm p-4 w-[1200px]">
          <div className="flex items-center space-x-2">
            <h1 className="font-bold text-lg">{active}</h1>
            <div className="bg-[#F2FAFF] text-blue-500 text-sm font-medium rounded-full w-6 h-6 flex items-center justify-center">
              11
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">
              <BellDot color="gray" />
            </span>
            <Image
              src="/images/IMG_1850.jpg"
              width={143.34}
              height={30}
              alt="User Image"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium">
              <ChevronDownIcon className="h-5 w-5" />
            </span>
          </div>
        </nav>
        <main className="flex-1 w-full h-full overflow-auto">
          <div className="p-6 h-full w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
