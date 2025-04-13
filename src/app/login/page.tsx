"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (res?.ok) {
      toast.success("Welcome!")
      router.push("/dashboard/verifiers");
    } else {
      toast.error("Invalid credentials");
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-8 left-10 text-white font-bold text-xl">
        <Image src="/images/LOGO2.png" width={143.34} height={30} alt="Logo" />
      </div>
      <p className="absolute top-8 right-10 flex items-center space-x-2 text-sm text-gray-500">
        <span>New to Xpress Rewards?</span>
        <a
          href="/register"
          className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-400 hover:text-white transition duration-300"
        >
          Sign Up
        </a>
      </p>
      <div
        className="bg-white p-8 rounded-lg shadow-md"
        style={{ width: "522px" }}
      >
        <h2 className="text-xl font-semibold mb-1 text-blue-500">
          Welcome Back!
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Sign in to your Xpress reward partner{"'"}s dashboard
        </p>
        <hr className="border-gray-300 mb-6" />

        <form className="space-y-6">
          <div>
            <div className="mt-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
                <input
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  type="email"
                  onChange={handleChange}
                  className="block w-full text-2xl border rounded-md border-gray-300 bg-gray-50 px-3 py-1.5 placeholder:text-sm focus:outline-none focus:border-blue-500 sm:text-sm/6"
                />
              </label>
            </div>
          </div>
          <div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">
                Password
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full text-2xl border rounded-md border-gray-300 bg-gray-50 px-3 py-1.5 placeholder:text-sm focus:outline-none focus:border-blue-500 sm:text-sm/6"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer">
                    {showPassword ? (
                      <EyeSlashIcon
                        className="h-5 w-5"
                        onClick={togglePasswordVisibility}
                      />
                    ) : (
                      <EyeIcon
                        className="h-5 w-5"
                        onClick={togglePasswordVisibility}
                      />
                    )}
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-600">
              Forgot Password?
            </span>
            <Link
              href="/forgot-password"
              className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-400"
            >
              Reset it
            </Link>
          </div>
          <button
            onClick={handleLogin}
            className="w-full flex justify-center px-4 py-3 bg-blue-500  text-white rounded-md hover:bg-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
