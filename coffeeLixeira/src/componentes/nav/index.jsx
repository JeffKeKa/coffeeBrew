
import { IconButtonDefault } from "../icon";
import { IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <>
      <nav className="bg-brown-700 rounded-lg ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
              >
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div
                id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <Link   
                  to="/menu"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    > 
                  
                 
                    Menu
                   
                  </Link>
                  <Link   
                  to="/inicio"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    > 
                  
                 
                   Inicio
                   
                  </Link>
                  <Link   
                  to="/cadastrocliente"
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    > 
                  
                 
                    Cadastro
                   
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center"></div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                 
                  <Link   
                  to="/inicio"
                    className="bg-gray-900 text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
                    > 
                  
                 <h1>
                    CoffeBrew
                
                    </h1>
                   
                  </Link>
                  <Link   
                  to="/inicio"
                    className="bg-gray-900 text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
                    > 
                  
                 
                   Inicio
                   
                  </Link>
                  <Link   
                  to="/menu"
                    className="bg-gray-900 text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
                    > 
                  
                 
                    Menu
                   
                  </Link>
                  <Link
                  to="/cadastrocliente"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Cadastro
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
              
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
