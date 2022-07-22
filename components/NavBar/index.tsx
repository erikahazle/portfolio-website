import { useState } from "react";

// @TODO :: 
// 1. extract desktop/mobile links into a reusable component
// 2. pass down links as props to make this reusable and extensible for when the link list grows

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="title-font tracking-tight sm:text-3xl text-2xl mb-4 pb-8 text-gray-900 font-montserrat font-bold uppercase">
                  Jonika
                </span> 
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-coral p-2 inline-flex items-center justify-center text-gray-500 hover:bg-givry focus:outline-none focus:ring-2 focus:ring-inset focus:givry"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="/portfolio">
                <span className="title-font tracking-tight sm:text-l text-m mb-4 pb-8 text-gray-900 font-montserrat font-light hover:font-bold uppercase">
                  Portfolio
                </span> 
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="bg-coral">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <a href="#" className="title-font tracking-tight text-xl mb-4 pb-8 text-gray-900 font-montserrat font-bold uppercase">
                    Jonika
                  </a> 
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-pinkladt p-2 inline-flex items-center justify-center text-gray-500 hover:bg-givry focus:outline-none focus:ring-2 focus:ring-inset focus:ring-givry"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="/portfolio"
                    className="-m-3 p-3 flex items-center hover:bg-givry"
                  >
                    <span className="text-base font-montserrat font-light text-gray-900 uppercase">
                      Porfolio
                    </span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
