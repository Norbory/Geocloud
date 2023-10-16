/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Mapa from "../components/mapa"
import { Popover } from "@headlessui/react";


export function Dashboard(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [otroSeleccionado, setOtroSeleccionado] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    const handleRadioChange = (event: { target: { value: string; }; }) => {
      if (event.target.value === "otro") {
        setOtroSeleccionado(true);
      } else {
        setOtroSeleccionado(false);
      }
    };

    return(
        <div className='flex flex-col items-center w-screen' style={{ backgroundColor: "#FBFBFB" }}>
          <nav className="h-14 flex justify-end items-center mr-16" style={{ width:"100%"}}>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 left-0 mt-2 -ml-4 transform px-2 w-screen max-w-xs sm:px-0">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="bg-white px-5 py-4">
                      <p className="text-black font-bold text-lg">Bienvenido Geonauta</p>
                      <p className="">
                        Le damos la bienvenida a esta experiencia con su Geocloud aqui podra recibir y revisar 
                        la información sobre sus dispositivos de manera fácil y accesible, con el fin de atender
                        con prontitud a las emergencias correspondientes.
                      </p>
                      <p>
                        Utilice el ticket para reservar más equipos y el boton para registrar nuevas ubicaciones de sus sensores.
                      </p>
                    </div>
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                </svg>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 left-0 mt-2 -ml-4 transform px-2 w-screen max-w-xs sm:px-0">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="bg-white px-5 py-4">
                      <p className="text-black font-bold text-lg">Adquiere más productos</p>
                      <p className="">
                        Nuestra organización se enorgullece de permitir darles acceso a las distintas soluciones 
                        predominantes del mercado.
                      </p>
                      <p>
                        Proximamente lanzaremos tienda online con uso de ticketera digital.
                      </p>
                    </div>
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>

            <button 
              onClick={openModal} 
              className="bg-[#FFD7A2] mr-4"
            >
              Añadir piezometro
            </button>
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-lg">
                  <h2 className="text-xl font-bold mb-2 text-center">Añade nuevo sensor piezométrico</h2>
                  <p className="text-gray-400 text-center mb-4">
                    Coloca los valores correspondientes para añadir su dispositivo
                  </p>
                  <form action="">
                    <div className="mb-4">
                      <label htmlFor="latitud" className="block text-gray-600 font-semibold">Latitud</label>
                      <input
                        type="number"
                        id="latitud"
                        name="latitud"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="longitud" className="block text-gray-600 font-semibold">Longitud</label>
                      <input
                        type="number"
                        id="longitud"
                        name="longitud"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="estadoPozo" className="block text-gray-600 font-semibold">Estado de pozo</label>
                      <select
                        id="estadoPozo"
                        name="estadoPozo"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="humedo">Húmedo</option>
                        <option value="seco">Seco</option>
                      </select>
                    </div>
                    <div className="mb-2">
                      <label className="block text-gray-600 font-semibold mb-2">Intervalo de lecturas</label>
                      <div className="flex items-center ml-2">
                        <input
                          type="radio"
                          id="1h"
                          name="intervaloLecturas"
                          value="1h"
                          className="mr-2 rounded-full border-gray-300 cursor-pointer"
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="1h" className="text-gray-600 mr-4">1 hora</label>

                        <input
                          type="radio"
                          id="4h"
                          name="intervaloLecturas"
                          value="4h"
                          className="mr-2 rounded-full border-gray-300 cursor-pointer"
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="4h" className="text-gray-600 mr-4">4 horas</label>

                        <input
                          type="radio"
                          id="1dia"
                          name="intervaloLecturas"
                          value="1dia"
                          className="mr-2 rounded-full border-gray-300 cursor-pointer"
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="1semana" className="text-gray-600 mr-4">1 día</label>

                        <input
                          type="radio"
                          id="otro"
                          name="intervaloLecturas"
                          value="otro"
                          className="mr-2 rounded-full border-gray-300 cursor-pointer"
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="otro" className="text-gray-600">Otro:</label>
                        
                        <input
                          type="number"
                          id="otro"
                          name="otro"
                          className={`w-48 px-3 py-1 border border-gray-300 rounded-md ml-2 ${otroSeleccionado ? '' : 'bg-gray-200'}`}
                          placeholder="Pon en horas"
                          disabled={!otroSeleccionado}
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <button
                        onClick={closeModal}
                        className="bg-[#16B80C] mr-4 text-white"
                      >
                        Confirmar adición
                      </button>
                      <button
                        onClick={closeModal}
                        className="bg-[#F73A3A] mr-4 text-white"
                      >
                        Cancelar adición
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </nav>

          <div className="absolute z-10 bottom-2 left-60 max-w-md p-2 bg-slate-100 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                  <h5 className="text-md font-bold leading-none text-gray-900 dark:text-white">Ultimas conexiones</h5>
                  <a href="#" className="text-xs font-medium text-blue-600 hover:underline dark:text-blue-500">
                      Mirar todo
                  </a>
            </div>
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                              <img className="w-8 h-8 rounded-full" src="https://media.licdn.com/dms/image/D4D03AQEH8BcjC2wQtA/profile-displayphoto-shrink_800_800/0/1681338251934?e=1703116800&v=beta&t=TKkTRyUNETxzfzFxGgcqgObfqe48GrlVyTepD0cwKB4" alt="Imagen de perfil de Angelo"/>
                          </div>
                          <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-gray-900 truncate dark:text-white">
                                  Angelo Mandros
                              </p>
                              <p className="text-xs text-gray-500 truncate dark:text-gray-400">
                                  angelo.mandros@geohidrac.com
                              </p>
                          </div>
                          <div className="inline-flex items-center text-xs font-semibold text-gray-900 dark:text-white">
                              15/10
                          </div>
                      </div>
                  </li>
                  <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                              <img className="w-8 h-8 rounded-full" src="https://media.licdn.com/dms/image/D4E03AQH7ryTtKB29nQ/profile-displayphoto-shrink_800_800/0/1690006552419?e=1703116800&v=beta&t=YygSuBnDQdZRIBO7voHgyk4pIMP5lJ9Df1Kk7B7aRDo" alt="Foto de perfil de Alava"/>
                          </div>
                          <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-gray-900 truncate dark:text-white">
                                Cesar Alava
                              </p>
                              <p className="text-xs text-gray-500 truncate dark:text-gray-400">
                                cesar.alava@geohidrac.com
                              </p>
                          </div>
                          <div className="inline-flex items-center text-xs font-semibold text-gray-900 dark:text-white">
                              12/10
                          </div>
                      </div>
                  </li>
                  <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                              <img className="w-8 h-8 rounded-full" src="https://media.licdn.com/dms/image/C4E03AQGCMiypNI8t0A/profile-displayphoto-shrink_800_800/0/1516821372688?e=1703116800&v=beta&t=xyu2nCqdEp-bmaIEWHmq3xYWxbKmKZoggCskLDAx-is" alt="Foto de perfil de Ing. Crhystian"/>
                          </div>
                          <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-gray-900 truncate dark:text-white">
                                Crhystian Caceres
                              </p>
                              <p className="text-xs text-gray-500 truncate dark:text-gray-400">
                                ccaceres@geohidrac.com
                              </p>
                          </div>
                          <div className="inline-flex items-center text-xs font-semibold text-gray-900 dark:text-white">
                              08/10
                          </div>
                      </div>
                  </li>
              </ul>
            </div>
          </div>

          <Mapa />
        </div>
    );
}