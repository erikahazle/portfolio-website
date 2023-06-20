import { useState } from "react";
import Link from "next/link";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-end items-center py-6 md:justify-start md:space-x-10">
            {/* <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" passHref>
                <span className="title-font tracking-wider sm:text-xl mb-4 pb-8 text-gray-900 font-montserrat font-bold uppercase cursor-pointer">
                  Erika Hazlewood
                </span> 
              </Link>
            </div> */}
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="
                bg-coral
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-500
                  hover:bg-givry
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  focus:givry
                "
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
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
              <Link href="/" passHref>
                <span className="title-font tracking-tight sm:text-l text-m mb-4 pb-8 text-gray-900 font-montserrat font-light hover:font-bold uppercase cursor-pointer">
                  Home
                </span> 
              </Link>
              <Link href="/portfolio" passHref>
                <span className="title-font tracking-tight sm:text-l text-m mb-4 pb-8 text-gray-900 font-montserrat font-light hover:font-bold uppercase cursor-pointer">
                  Portfolio
                </span> 
              </Link>
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
              <div className="flex justify-between">
                <div>
                  {/* <Link href="/" passHref>
                    <span className="title-font tracking-tight text-xl mb-4 pb-8 text-gray-900 font-montserrat font-bold uppercase cursor-pointer">
                      Erika Hazlewood
                    </span>
                  </Link>  */}
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
                  <Link
                    href="/"
                    passHref
                  >
                    <span className="-m-3 p-3 flex items-center hover:bg-givry text-base font-montserrat font-light text-gray-900 uppercase cursor-pointer">
                      Home
                    </span>
                  </Link>
                  <Link
                    href="/portfolio"
                    passHref
                  >
                    <span className="-m-3 p-3 flex items-center hover:bg-givry text-base font-montserrat font-light text-gray-900 uppercase cursor-pointer">
                      Porfolio
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
