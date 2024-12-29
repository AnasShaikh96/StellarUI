"use client";
// import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="bg-slate-100">
      <div className="mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between items-center gap-x-4 lg:px-8 sm:px-6 ">
          <div className="absolute left-0 inset-y-0 flex items-center">
            <button className="py-3 sm:hidden">
              <Bars3Icon className="block size-6" />
            </button>
          </div>
          <div className="flex flex-1 justify-center sm:items-center sm:justify-start">
            <span>Brand Img</span>
            <div className="ml-6 hidden sm:block">
              <ul className="flex  my-2">
                <li className="px-3 py-2  rounded-sm text-sm font-medium bg-slate-400">
                  <a href="#">Documentation</a>
                </li>
                <li className="px-3 py-2  rounded-sm text-sm font-medium">
                  <a href="#">Component</a>
                </li>
                <li className="px-3 py-2  rounded-sm text-sm font-medium">
                  <a href="#">Templates</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="absolute right-0 inset-y-0 flex items-center">
            <button className="bg-violet-600 px-3 py-2 text-sm text-white rounded-md font-medium">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
