import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const toggleDropdown = () => {
     setIsDropdownOpen(!isDropdownOpen);
   };

  return (
    (
    <nav>
        <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
         <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800" style={{ backgroundColor: "#003049" }}>
               <a href="https://www.geohidrac.com/" className="flex items-center pl-2.5 mb-5">
                  <img src="https://res.cloudinary.com/dmbtlv0hg/image/upload/v1696810008/geo_ih5lkw.png" className="h-6 mr-3 sm:h-7" alt="Geohidrac Logo"/>
                  <span className="self-center text-xl text-amber-50 font-semibold whitespace-nowrap dark:text-white">Geohidrac</span>
               </a>
               <ul className="space-y-2 font-medium">
                  <li>
                  <a
                     to="/dashboard"
                     className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-slate-400 dark:hover:bg-gray-700 group"
                  >
                  <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6 text-amber-50"
                        >
                           <path 
                           stroke-linecap="round" 
                           stroke-linejoin="round" 
                           d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" 
                           />
                        </svg>
                        <span className="ml-3 text-amber-50">Dashboard</span>
                  </a>
                  </li>
                  <li>
                     <button
                        type="button"
                        className="text-amber-50 flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-slate-400 dark:text-white dark:hover:bg-gray-700"
                        aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example"
                        onClick={toggleDropdown}
                     >
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-amber-50">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                           </svg>
                           <span className="flex-1 ml-3 text-left whitespace-nowrap text-amber-50">Dispositivos</span>
                           <svg className="w-3 h-3 text-amber-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                           </svg>
                     </button>
                     <ul id="dropdown-example" className={`${isDropdownOpen ? "" : "hidden"}  py-2 space-y-2`}>
                           <li>
                              <a href="#" className="text-amber-50 flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-slate-400  dark:text-white dark:hover:bg-gray-700"><span className="text-amber-50">Piezometro Atacocha</span></a>
                           </li>
                           <li>
                              <a href="#" className="text-amber-50 flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-slate-400  dark:text-white dark:hover:bg-gray-700"><span className="text-amber-50">Piezometro El Porvenir</span></a>
                           </li>
                     </ul>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-slate-400 dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-amber-50">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-left text-amber-50">Notificaciones</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-slate-400 dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-amber-50">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-left text-amber-50">Soporte</span>
                     </a>
                  </li>
               </ul>
            </div>
         </aside>
    </nav>
    )
  );
}