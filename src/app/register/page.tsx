"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import {
  CloudArrowUpIcon,
  PaperClipIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { NigerianStates } from "../../../lib/nigerianStates";

export default function Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    BusinessEmail: "",
    password: "",
    confirmPassword: "",
    BusinessName: "",
    BusinessPhone: "",
    BusinessCategory: "",
    accountNumber: "",
    image: null as File | null,
    houseNumber: "",
    street: "",
    city: "",
    state: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      setFormData((prev) => ({ ...prev, image: file }));
    } else {
      toast.error("Max upload size is 10MB");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    const updatedFormData = {
      ...formData,
      accountNumber: Number(formData.accountNumber),
    };

    const body = new FormData();
    Object.entries(updatedFormData).forEach(([key, value]) => {
      if (value) {
        body.append(key, typeof value === "number" ? value.toString() : value);
      }
    });

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(updatedFormData),
    });

    if (res.ok) {
      toast.success("Registration successful");
      router.push("/register/pending");
    } else {
      toast.error("Failed to register");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="absolute top-4 left-4 sm:top-8 sm:left-10 text-white font-bold text-lg sm:text-xl">
        <Image src="/images/LOGO2.png" width={143.34} height={30} alt="Logo" />
      </div>
      <p className="absolute top-4 right-4 sm:top-8 sm:right-10 flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
        <span>Already have an account?</span>
        <a
          href="/login"
          className="px-3 sm:px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-400 hover:text-white transition duration-300"
        >
          Sign In
        </a>
      </p>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md sm:max-w-lg">
        <h2 className="text-lg sm:text-xl font-semibold mb-1 text-blue-500">
          Welcome to Xpress Rewards
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
          Complete the form below to get started
        </p>
        <hr className="border-gray-300 mb-4 sm:mb-6" />
        <p className="text-xs sm:text-sm text-blue-500 mb-4 sm:mb-6">
          Business Information
        </p>
        {step === 1 ? (
          <form className="space-y-4 sm:space-y-6">
            <div>
              <label
                htmlFor="BusinessName"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Business Name
                <input
                  type="text"
                  id="BusinessName"
                  onChange={handleChange}
                  value={formData.BusinessName}
                  className="block w-full border rounded-md border-gray-300 bg-gray-50 px-3 py-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:border-blue-500 text-sm"
                  required
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="BusinessEmail"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Business Email Address
                <input
                  id="BusinessEmail"
                  required
                  value={formData.BusinessEmail}
                  type="email"
                  onChange={handleChange}
                  className="block w-full border rounded-md border-gray-300 bg-gray-50 px-3 py-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:border-blue-500 text-sm"
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="BusinessPhone"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Business Phone Number
                <input
                  id="BusinessPhone"
                  onChange={handleChange}
                  value={formData.BusinessPhone}
                  className="block w-full border rounded-md border-gray-300 bg-gray-50 px-3 py-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:border-blue-500 text-sm"
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="BusinessCategory"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Business Category
                <select
                  id="BusinessCategory"
                  onChange={handleChange}
                  value={formData.BusinessCategory}
                  className="block w-full border rounded-md border-gray-300 bg-gray-50 px-3 py-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="sole-proprietorship">
                    Sole-proprietorship
                  </option>
                  <option value="partnership">Partnership</option>
                  <option value="company">Company</option>
                </select>
              </label>
            </div>
            <div>
              <label
                htmlFor="accountNumber"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Account Number
                <input
                  id="accountNumber"
                  onChange={handleChange}
                  value={formData.accountNumber}
                  className="block w-full border rounded-md border-gray-300 bg-gray-50 px-3 py-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:border-blue-500 text-sm"
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Image (Logo)
              </label>
              <div className="border-1 border-dashed rounded-md p-4 flex flex-col items-center justify-center">
                {formData.image ? (
                  <div>
                    <Image
                      src={URL.createObjectURL(formData.image)}
                      alt="Uploaded Logo"
                      className="max-h-20"
                      width={100}
                      height={100}
                    />
                  </div>
                ) : (
                  <>
                    <CloudArrowUpIcon className="h-8 w-8 text-blue-500 mb-2" />
                    <p className="text-gray-500 text-xs mb-1">
                      Drag here or click the button below to upload
                    </p>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  id="image"
                  onChange={handleFileChange}
                  className="sr-only"
                />
                <label
                  htmlFor="image"
                  className="bg-blue-500 hover:bg-blue-300 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer text-xs sm:text-sm flex items-center gap-2"
                >
                  <PaperClipIcon className="h-4 w-4 text-white" />
                  Choose file
                </label>
                <p className="text-gray-500 text-xs mt-2">
                  Maximum upload size: 10MB (.jpg)
                </p>
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <button
                onClick={() => setStep(2)}
                className="w-full sm:w-[185px] flex justify-center px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-400"
              >
                Next
              </button>
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                Step 1 of 2
              </span>
            </div>
          </form>
        ) : (
          <form className="space-y-4 sm:space-y-6">
            <div className="flex space-x-2">
              <div className="w-1/3">
                <label
                  htmlFor="houseNumber"
                  className="block text-xs sm:text-sm font-medium text-gray-700"
                >
                  House Number
                  <input
                    id="houseNumber"
                    required
                    value={formData.houseNumber}
                    onChange={handleChange}
                    className="block w-full border rounded-md border-gray-300 bg-gray-50 px-3 py-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:border-blue-500 text-sm"
                  />
                </label>
              </div>
              <div className="w-2/3">
                <label
                  htmlFor="street"
                  className="block text-xs sm:text-sm font-medium text-gray-700"
                >
                  Street
                  <input
                    id="street"
                    required
                    value={formData.street}
                    onChange={handleChange}
                    className="block w-full border rounded-md border-gray-300 bg-gray-50 px-3 py-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:border-blue-500 text-sm"
                  />
                </label>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-1/2">
                <label
                  htmlFor="city"
                  className="block text-xs sm:text-sm font-medium text-gray-700"
                >
                  City
                  <input
                    id="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="block w-full border rounded-md border-gray-300 bg-gray-50 px-3 py-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:border-blue-500 text-sm"
                  />
                </label>
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="state"
                  className="block text-xs sm:text-sm font-medium text-gray-700"
                >
                  State
                  <select
                    id="state"
                    value={formData.state}
                    required
                    onChange={handleChange}
                    className="block w-full border rounded-md border-gray-300 bg-gray-50 px-3 py-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:border-blue-500 text-sm"
                  >
                    <option value="">Select a state</option>
                    {NigerianStates.map((stateName) => (
                      <option key={stateName} value={stateName}>
                        {stateName}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-blue-500 mb-4 sm:mb-6">
              Contact Person Information
            </p>
            <div>
              <label
                htmlFor="contactName"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Contact Name
                <input
                  id="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleChange}
                  className="block w-full border rounded-md border-gray-300 bg-gray-50 px-3 py-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:border-blue-500 text-sm"
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="contactPhone"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Contact Phone Number
                <input
                  id="contactPhone"
                  required
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="block w-full border rounded-md border-gray-300 bg-gray-50 px-3 py-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:border-blue-500 text-sm"
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="contactEmail"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Contact Email Address
                <input
                  id="contactEmail"
                  required
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="block w-full border rounded-md border-gray-300 bg-gray-50 px-3 py-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:border-blue-500 text-sm"
                />
              </label>
            </div>
            <p className="text-xs sm:text-sm text-blue-500 mb-4 sm:mb-6">
              Password
            </p>
            <div>
              <label
                htmlFor="password"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Password
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full border rounded-md border-gray-300 bg-gray-50 px-3 py-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:border-blue-500 text-sm"
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
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-xs sm:text-sm font-medium text-gray-700"
              >
                Confirm Password
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="block w-full border rounded-md border-gray-300 bg-gray-50 px-3 py-2 placeholder:text-xs sm:placeholder:text-sm focus:outline-none focus:border-blue-500 text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 cursor-pointer">
                    {showConfirmPassword ? (
                      <EyeSlashIcon
                        className="h-5 w-5"
                        onClick={toggleConfirmPasswordVisibility}
                      />
                    ) : (
                      <EyeIcon
                        className="h-5 w-5"
                        onClick={toggleConfirmPasswordVisibility}
                      />
                    )}
                  </div>
                </div>
              </label>
            </div>
            <div className="flex space-x-2 items-center">
              <button
                onClick={handleSubmit}
                className="w-full sm:w-[185px] flex justify-center px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-400"
              >
                Submit
              </button>
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                Step 2 of 2
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
