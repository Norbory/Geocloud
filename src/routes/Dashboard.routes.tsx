/* eslint-disable @typescript-eslint/no-unused-vars */
import Mapa from "../components/mapa"
import {Tarjeta} from "../components/Tarjeta"
import Modelado from "../components/modelado"

export function Dashboard(){

    return(
        <div className='flex flex-col items-start'>
          <Mapa />
          <div className="flex flex-row">
            <Tarjeta />
            <Modelado />
          </div>
        </div>
    );
}