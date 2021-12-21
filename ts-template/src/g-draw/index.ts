/**
 * https://github.com/antvis/g
 * 
 * npm install -D @antv/g --registry=https://registry.npmjs.org/
 */
// @ts-ignore
import { Circle, Canvas } from '@antv/g'; // @ts-ignore
import { Renderer as CanvasRenderer } from '@antv/g-canvas';

function createElementAppendToBody() {
  if (document.querySelector('div[id="container"]') === null) {
    const eleDom = document.createElement('div');
    eleDom.id = 'container';
    document.body.appendChild(eleDom);
  }
}

export function draw() {
  createElementAppendToBody();

  const canvas = new Canvas({
    container: 'container',
    width: 500,
    height: 500,
    renderer: new CanvasRenderer(), // select a renderer
  });

  // create a circle
  const circle = new Circle({
    style: {
      x: 100,
      y: 100,
      r: 50,
      fill: 'red',
      stroke: 'blue',
      lineWidth: 5,
    },
  });
  console.log('canvas:', canvas);
  console.log('circle:', circle);

  // append to canvas
  canvas.appendChild(circle);
}
