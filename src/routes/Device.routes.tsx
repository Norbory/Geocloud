import { createChart, PriceScaleMode } from 'lightweight-charts';
import { useEffect, useState } from 'react';

export function Device() {
  const [lineColor, setLineColor] = useState('rgba(255, 52, 71, 1)');

  useEffect(() => {
    const chartOptions = {
      layout: {
        backgroundColor: 'white',
        textColor: 'black',
      },
      rightPriceScale: {
        visible: false,
    },
    leftPriceScale: {
        visible: true,
    },
    timeScale: {
      timeVisible: true, // Esto mostrará el tiempo en el eje X
      scaleMargins: {
        top: 15, // Espacio reservado en la parte superior para el label
      },
    },
    };
    const chart = createChart('container', chartOptions);
    const baselineSeries = chart.addBaselineSeries({ baseValue: { type: 'price', price: 25 } });
    const data = [
      { value: 4401, time: 1642425322 },
      { value: 4410, time: 1642511722 },
      { value: 4410, time: 1642598122 },
      { value: 4412, time: 1642684522 },
      { value: 4415, time: 1642770922 },
      { value: 4413, time: 1642857322 },
      { value: 4420, time: 1642943722 },
      { value: 4423, time: 1643030122 },
      { value: 4425, time: 1643116522 },
      { value: 4422, time: 1643202922 },
      { value: 4424, time: 1643316522 },
      
      { value: 4426, time: 1643325322 },
      { value: 4425, time: 1643511722 },
      { value: 4425, time: 1643598122 },
      { value: 4425, time: 1643684522 },
      { value: 4428, time: 1643770922 },
      { value: 4427, time: 1643857322 },
      { value: 4426, time: 1643943722 },
      { value: 4432, time: 1644030122 },
      { value: 4436, time: 1644116522 },
      { value: 4438, time: 1644202922 },
      { value: 4442, time: 1644316522 },

      { value: 4439, time: 1644402922 }
    ];

    baselineSeries.setData(data);

    const priceLine = baselineSeries.createPriceLine({
      price: 4445,
      color: lineColor,
      lineWidth: 2,
      lineStyle: 1,
      axisLabelVisible: true,
    },
    );

    const alertaA = baselineSeries.createPriceLine({
      price: 4440,
      color: lineColor,
      lineWidth: 2,
      lineStyle: 1,
      axisLabelVisible: true,
    },
    );

    const alertaN = baselineSeries.createPriceLine({
      price: 4435,
      color: lineColor,
      lineWidth: 2,
      lineStyle: 1,
      axisLabelVisible: true,
    },
    );    

    chart.timeScale().fitContent();

    // Verificar si el valor de la serie supera 50 y cambiar el color de la línea
    baselineSeries.setData(data);
      data.forEach((item) => {
        if (item.value >= 4445) {
          setLineColor('red');
          priceLine.applyOptions({ color: 'red' });
        } else if (item.value >= 4440 && item.value < 4445) {
          setLineColor('yellow');
          alertaN.applyOptions({ color: 'yellow' });
        } else if (item.value >= 4435 && item.value < 4440) {
          setLineColor('orange');
          alertaA.applyOptions({ color: 'orange' });
        }
      });
    }, []);

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

      <div id="container" style={{ width: '90%', height: '300px' }} className='mt-8 mb-8'></div>
    </div>
  );
}
