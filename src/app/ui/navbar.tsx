import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="bg-slate-100">
      <div className="mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between items-center  ">
          <div className="absolute left-0 inset-y-0 flex items-center">
            <button className="py-3 sm:hidden">
              <Bars3Icon className="block size-6" />
            </button>
          </div>
          <div className="flex flex-1 justify-center sm:items-center sm:justify-start ">
            <span>Brand Img</span>
          </div>
          <div className="absolute right-0 inset-y-0 flex items-center">
            <div className="  hidden sm:flex items-center ">
              <a
                href="#"
                className="px-3 py-2 inline-flex  items-center  rounded-sm text-sm font-medium h-16 text-gray-500"
              >
                Documentation
              </a>
              <a
                href="#"
                className="px-3 py-2  inline-flex  items-center rounded-sm text-sm font-medium border-b-2 border-violet-500 h-16"
              >
                Component
              </a>
              <a
                href="#"
                className="px-3 py-2 inline-flex  items-center rounded-sm text-sm font-medium h-16 text-gray-500"
              >
                Templates
              </a>
            </div>
            <button className="ml-6 bg-violet-600 px-3 py-2 text-sm text-white rounded-md font-medium">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
