import { Application } from '@splinetool/runtime';

export default function Modelado(){
    const canvas = document.getElementById('canvas3d');
    if (canvas instanceof HTMLCanvasElement) {
        const app = new Application(canvas);
        app.load('https://prod.spline.design/KikqOPUWteRoVjvj/scene.splinecode');
    }

    return(
        <div style={{width: "600px", height:"400px"}} className='mt-10'>
            <canvas id="canvas3d"></canvas>
        </div>
    );
}