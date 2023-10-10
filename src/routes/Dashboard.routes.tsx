/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
// import mapa from "../components/mapa"

export function Dashboard(){

    const [data,setData] = React.useState(0);
    const [digits,setDigits] = React.useState(0);

    return(
        <>
          {/* <MapContainer /> */}
            <h1 className="text-4xl font-bold self-center mb-4">
              Data Piezométrica
            </h1>
            <div className='flex flex-row justify-between'>
              <div>
                <h3 className="font-bold">
                  TEMPERATURA
                </h3>
                <p>
                  {data}
                </p>
              </div>
              <div>
                <h3 className="font-bold">
                  DIGITS
                </h3>
                <p>
                  {digits}
                </p>
              </div>
            </div>
        </>
    );
}