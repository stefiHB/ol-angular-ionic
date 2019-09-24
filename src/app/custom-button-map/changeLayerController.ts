import {defaults as defaultControls, Control} from 'ol/control.js';
import {Renderer2} from '@angular/core';

export class ChangeLayerController extends Control {
  options: any;

  constructor(renderer: Renderer2, optOptions?: any) {
    super(optOptions);
    this.options = optOptions || {};

    const button = renderer.createElement('button');
    button.className = 'btn-sty';
    button.innerHTML = 'L';

    const myElement = renderer.createElement('div');
    myElement.className = 'rotate-north ol-unselectable ol-control';
    renderer.appendChild(myElement, button);

    Control.call(this, {
      element: myElement
    });

    button.addEventListener('click', this.testMe);
  }

  testMe() {
    console.log('this is test');
  }

}
