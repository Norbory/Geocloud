import { createChart, PriceScaleMode } from 'lightweight-charts';
import { useEffect, useState } from 'react';

export function Device() {
  const [lineColor, setLineColor] = useState('rgba(38, 166, 154, 1)'); // Color por defecto

  useEffect(() => {
    const chartOptions = {
      layout: {
        backgroundColor: 'white',
        textColor: 'black',
      },
      rightPriceScale: {
        mode: PriceScaleMode.Logarithmic,
      },
    };
    const chart = createChart('container', chartOptions);
    const baselineSeries = chart.addBaselineSeries({ baseValue: { type: 'price', price: 25 } });
    const data = [
      { value: 1, time: 1642425322 },
      { value: 8, time: 1642511722 },
      { value: 10, time: 1642598122 },
      { value: 20, time: 1642684522 },
      { value: 3, time: 1642770922 },
      { value: 43, time: 1642857322 },
      { value: 41, time: 1642943722 },
      { value: 43, time: 1643030122 },
      { value: 44, time: 1643116522 },
      { value: 46, time: 1643202922 },
      { value: 42, time: 1643316522 },
      { value: 68, time: 1643402922 }
    ];

    baselineSeries.setData(data);

    const priceLine = baselineSeries.createPriceLine({
      price: 50,
      color: lineColor,
      lineWidth: 2,
      lineStyle: 0,
      axisLabelVisible: true,
    });

    chart.timeScale().fitContent();

    // Verificar si el valor de la serie supera 50 y cambiar el color de la línea
    baselineSeries.setData(data);
    data.forEach((item) => {
      if (item.value > 50) {
        setLineColor('red');
        priceLine.applyOptions({ color: 'red' });
        return;
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

      <div id="container" style={{ width: '90%', height: '300px' }}></div>
    </div>
  );
}
