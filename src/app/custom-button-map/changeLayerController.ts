import {Control} from 'ol/control.js';
import {Renderer2} from '@angular/core';

export class ChangeLayerController extends Control {
  options: any;
  button: Element;
  myElement: Element;
  isOpen = false;

  constructor(private renderer: Renderer2, private optOptions?: any) {
    super({});

    // this.options = this.optOptions || {};

    const ionicIcon = this.renderer.createElement('ion-icon');
    ionicIcon.name = 'logo-buffer';

    this.button = this.renderer.createElement('button');
    this.button.className = 'btn-sty';
    this.renderer.appendChild(this.button, ionicIcon);

    this.myElement = this.renderer.createElement('div');
    this.myElement.className = 'change-layer ol-unselectable ol-control';
    this.renderer.appendChild(this.myElement, this.button);

    Control.call(this, {
      element: this.myElement
    });

    this.button.addEventListener('click', () => this.presentLayers());
    console.log(this.renderer);

  }


  presentLayers() {
    console.log(this.isOpen);
    this.isOpen = !this.isOpen;
  }



}
