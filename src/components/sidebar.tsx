import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const toggleDropdown = () => {
     setIsDropdownOpen(!isDropdownOpen);
   };

  return (
    (
    <>
        <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
         <aside id="sidebar-multi-level-sidebar" className="border-r-4  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800" style={{ backgroundColor: "#FBFBFB" }}>
               <ul className="space-y-2 font-medium mt-12">
                  <li>
                  <NavLink
                     to="/"
                     className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#FFD7A2] dark:hover:bg-gray-700 group"   
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                     </svg>
                     <span className="ml-3 text-black">Inicio</span>
                  </NavLink>
                  </li>
                  <li>
                     <button
                        type="button"
                        className="text-amber-50 flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-[#FFD7A2] dark:text-white dark:hover:bg-gray-700"
                        aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example"
                        onClick={toggleDropdown}
                     >
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                           </svg>
                           <span className="flex-1 ml-3 text-left whitespace-nowrap text-black">Dispositivos</span>
                           <svg className="w-3 h-3 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                           </svg>
                     </button>
                     <ul id="dropdown-example" className={`${isDropdownOpen ? "" : "hidden"}  py-2 space-y-2`}>
                           <li>
                              <NavLink to="/device" className="text-black flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-[#FFD7A2]  dark:text-white dark:hover:bg-gray-700"><span className="text-black">Piezometro 101</span></NavLink>
                           </li>
                           <li>
                              <a href="#" className="text-black flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-[#FFD7A2]  dark:text-white dark:hover:bg-gray-700"><span className="text-black">Piezometro 102</span></a>
                           </li>
                           <li>
                              <a href="#" className="text-black flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-[#FFD7A2]  dark:text-white dark:hover:bg-gray-700"><span className="text-black">Piezometro 103</span></a>
                           </li>
                     </ul>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#FFD7A2] dark:hover:bg-gray-700 group">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                     </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-left text-black">Notificaciones</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#FFD7A2] dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-left text-black">Soporte</span>
                     </a>
                  </li>
               </ul>
            </div>
         </aside>
    </>
    )
  );
}