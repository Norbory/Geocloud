export function Tarjeta(){

    const fechaActual = new Date();

    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por lo que sumamos 1
    const anio = fechaActual.getFullYear();

    const fechaFormateada = `${dia}/${mes}/${anio}`;


    return(
        <div className="flex mt-10 items-center font-sans">
            <div className="drop-shadow-lg" style={{ width: '320px', height: '200px', backgroundImage: 'url(https://www.kallpasab.com/img/img-nexa.jpg)', backgroundSize: 'cover', transform: 'rotate(-90deg)', overflow: "hidden" }}>           
            </div>
            <section className="flex flex-col text-left drop-shadow-lg mr-12">
                <h1 className="text-4xl font-bold">DATOS GENERALES</h1>
                <h2 className="text-2xl font-semibold">Empresa ID 45123J</h2>
                <div>
                    <div className="">
                        <span className="text-black">Nombre de la empresa </span>
                        <span className="text-slate-500"> NEXA RESOURCES</span>
                    </div>
                    <div>
                        <span className="text-black">N° dispositivos: </span>
                        <span className="text-slate-500"> 15</span>
                    </div>
                    <div>
                        <span className="text-black">Proximo Control: </span>
                        <span className="text-slate-500"> 1 mes</span>
                    </div>
                    <div>
                        <span className="text-black">Ultima alerta: </span>
                        <span className="text-slate-500"> {fechaFormateada}</span>
                    </div>
                </div>
            </section>
        </div>
    );
}