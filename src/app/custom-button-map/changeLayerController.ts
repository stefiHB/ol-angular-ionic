import {Control} from 'ol/control.js';
import {Renderer2} from '@angular/core';
import {MapService} from '../services/map.service';
import {customMapLayers} from '../shared/myEnums';
import {CustomButtonMapPage} from './custom-button-map.page';
import {Observable} from 'rxjs';
import {TestObservables} from './testObservables';

export class ChangeLayerController extends Control {
  options: any;
  button: Element;
  myElement: Element;
  isOpen = false;

  private mapService: MapService;
  private customBtn: CustomButtonMapPage;
  currentLayer: customMapLayers;

  testObs: TestObservables;

  constructor(private renderer: Renderer2, private optOptions?: any) {
    super({});
    this.options = optOptions || {};

    const ionicIcon = renderer.createElement('ion-icon');
    // ICONS: albums, logo-buffer, map
    ionicIcon.name = 'logo-buffer';

    this.button = renderer.createElement('button');
    this.button.className = 'btn-sty';
    renderer.appendChild(this.button, ionicIcon);
    this.button.addEventListener('click', () => this.presentLayers());

    this.myElement = renderer.createElement('div');
    this.myElement.className = 'change-layer ol-unselectable ol-control';
    renderer.appendChild(this.myElement, this.button);

    Control.call(this, {
      element: this.myElement
    });

    // Initialize the map service
    this.mapService = new MapService();
    this.customBtn = new CustomButtonMapPage(null);
    this.testObs = new TestObservables();


  }

  // Browse the available layers that the user can choose
  presentLayers() {

    if (this.isOpen) {
      /* Delete the buttons if it's open */
      const layerBtns = document.getElementsByClassName('btn-layer');
      const myLayerBtns = [];

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < layerBtns.length; i++) {
        const b = layerBtns[i];
        myLayerBtns.push(b);
      }

      // TODO: Instead of removing them, just hide them
      if (myLayerBtns) {
        for (const b of myLayerBtns) {
          this.renderer.removeChild(this.myElement, b);
        }
      }

    } else {
      /* Add the layer buttons if it's not open */

      // Declare the icon of the button
      const ionicIconPWD = this.renderer.createElement('ion-icon');
      ionicIconPWD.name = 'map';
      const ionicIconOSM = this.renderer.createElement('ion-icon');
      ionicIconOSM.name = 'add';

      // Create the buttons of each layer
      const btnPWD = this.renderer.createElement('button');
      btnPWD.className = 'btn-layer';
      this.renderer.appendChild(btnPWD, ionicIconPWD);
      const btnOSM = this.renderer.createElement('button');
      btnOSM.className = 'btn-layer';
      this.renderer.appendChild(btnOSM, ionicIconOSM);

      btnPWD.addEventListener('click', () => this.changeLayer(customMapLayers.pwd));
      btnOSM.addEventListener('click', () => this.changeLayer(customMapLayers.osm));

      const subscription = this.testObs.fromEvent(btnPWD, 'click')
        .subscribe((e) => console.log('patata?', e));

      // Add the buttons to the controls of the map
      this.renderer.appendChild(this.myElement, btnPWD);
      this.renderer.appendChild(this.myElement, btnOSM);
    }

    this.isOpen = !this.isOpen;
    console.log('is Open: ', this.isOpen);
    console.log('cur layer: ', this.currentLayer);
  }

  changeLayer(layer: customMapLayers) {
    this.testObs.sub();

    this.currentLayer = layer;

  }


}
