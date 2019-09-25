import {defaults as defaultControls, Control} from 'ol/control.js';
import {Renderer2} from '@angular/core';

export class ChangeLayerController extends Control {
  options: any;
  button: Element;
  myElement: Element;

  constructor(private renderer: Renderer2, private optOptions?: any) {
    super(optOptions);
    this.options = optOptions || {};

    const ionicIcon = renderer.createElement('ion-icon');
    // ICONS: albums, logo-buffer, map
    ionicIcon.name = 'logo-buffer';

    this.button = renderer.createElement('button');
    this.button.className = 'btn-sty';
    renderer.appendChild(this.button, ionicIcon);

    this.myElement = renderer.createElement('div');
    this.myElement.className = 'change-layer ol-unselectable ol-control';
    renderer.appendChild(this.myElement, this.button);



    Control.call(this, {
      element: this.myElement
    });

    this.button.addEventListener('click', this.presentLayers);
  }

  presentLayers() {
    console.log('this is test');

  }

}
