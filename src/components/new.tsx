/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

function NuevoDispositivo() {
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [estado, setEstado] = useState("Seco");
  const [intervalo, setIntervalo] = useState("");
  const [isButtonEnabled, setButtonEnabled] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLatitudChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setLatitud(value);
    checkButtonStatus(value, longitud, estado, intervalo);
  };

  const handleLongitudChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setLongitud(value);
    checkButtonStatus(latitud, value, estado, intervalo);
  };

  const handleEstadoChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setEstado(value);
    checkButtonStatus(latitud, longitud, value, intervalo);
  };

  const handleIntervaloChange = (event: { target: { value: string; }; }) => {
    const value = event.target.value.replace(/\D/g, ""); // Solo aceptar números
    setIntervalo(value);
    checkButtonStatus(latitud, longitud, estado, value);
  };

  const checkButtonStatus = (lat: string, long: string, est: string, int: string) => {
    const isEnabled = lat !== "" && long !== "" && est !== "" && int !== "";
    setButtonEnabled(isEnabled);
  };

  const handleRegistrarClick = () => {
    // Aquí puedes enviar los datos a tu servidor o realizar cualquier acción necesaria
    setShowConfirmation(true);

    // Ocultar el mensaje de confirmación después de 2 segundos
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  return (
    <div className="mt-10 pl-3 w-2/3 border-solid border-2 rounded-lg ">
      <h1 className="mt-1 text-left text-2xl font-bold">Añadir nuevo dispositivo</h1>
      <div className="flex mt-3">
        <label className="font-semibold">Latitud</label>
        <input className="ml-3 mr-3 border-solid border-2 text-slate-600" type="number" value={latitud} onChange={handleLatitudChange} placeholder="Numero de latitud"/>
        <label className="font-semibold">Longitud</label>
        <input className="ml-3 mr-3 border-solid border-2 text-slate-600" type="number" value={longitud} onChange={handleLongitudChange} placeholder="Numero de longitud"/>
      </div>
      <div className="flex mt-1">
        <label className="font-semibold">Estado del pozo</label>
        <select className="ml-1  text-slate-600" value={estado} onChange={handleEstadoChange}>
          <option value="Seco">Seco</option>
          <option value="Humedo">Humedo</option>
        </select>
      </div>
      <div className="flex mt-1">
        <label className="font-semibold">Intervalo de lecturas (min)</label>
        <input
          className="ml-3 border-solid border-2 text-slate-600"
          type="number"
          value={intervalo}
          onChange={handleIntervaloChange}
        />
      </div>
      <button
        className="mt-5 self-center"
        onClick={handleRegistrarClick}
        disabled={!isButtonEnabled}
        style={{ backgroundColor: isButtonEnabled ? "green" : "gray", color: isButtonEnabled ? "white" : "black" }}
      >
        Registrar dispositivo
      </button>
      {showConfirmation && (
        <p className="text-green-500">Dispositivo registrado con éxito</p>
      )}
    </div>
  );
}

export default NuevoDispositivo;