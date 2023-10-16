import React from 'react';

export function Device() {
  return (
    <div className='ml-3 mt-2 w-screen'>
      {/* titulo de la seccion */}
        <h1 className='text-[#D79138] text-3xl font-bold'>Piezometro 101</h1>
        <p className='text-zinc-500 text-xs'>Bienvenido al dashboard estadistico</p>
      {/* Lecturas */}
        <div className='pr-20 mt-10 flex justify-between w-2/3'>
          <h1 className='text-lg font-bold w-8'>Lecturas actuales</h1>
          <div>
              <h1 className='font-bold text-4xl'>55</h1>
              <p className='text-zinc-500'>Temperatura</p>
          </div>
          <div>
              <h1 className='font-bold text-4xl'>8809</h1>
              <p className='text-zinc-500'>Digits</p>
          </div>
        </div>
      {/* Estadisticas */}

    </div>
  );
}

export default Device;