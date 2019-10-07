import {Component, OnInit, Renderer2} from '@angular/core';
import TileLayer from 'ol/layer/Tile.js';
import Map from 'ol/Map.js';
import XYZ from 'ol/source/XYZ.js';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM.js';

import {fromLonLat, toLonLat} from 'ol/proj';

import {ChangeLayerController} from './changeLayerController';
import {customMapLayers} from '../shared/myEnums';
import {MapService} from '../services/map.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-custom-button-map',
  templateUrl: './custom-button-map.page.html',
  styleUrls: ['./custom-button-map.page.scss'],
})
export class CustomButtonMapPage implements OnInit {

  // MAP declaration
  layerPWD: TileLayer;
  layerOSM: TileLayer;

  map: Map;
  source: XYZ;
  view: View;
  changeLayerCtrl: ChangeLayerController;

  // default coordinates
  private latitude = 34.5079896;
  private longitude = 32.2554884;

  private mapSub: Subscription;

  // Default map Layer
  private selectedLayer;


  constructor(private renderer: Renderer2,
              private mapService: MapService) {
    this.mapSub = this.mapService.getLayer().subscribe(
      l => {
        console.log('Getting layer...', l);
        if (l) {
          this.selectedLayer = l;
          this.changeLayer();
        }
      }
    );
  }

  ngOnInit() {

    setTimeout(_ => this.initializeMap(), 500);

  }

  initializeMap() {

    this.layerOSM = new TileLayer({
      source: new OSM()
    });

    this.view = new View({
      center: fromLonLat([this.longitude, this.latitude]),
      zoom: 9
    });

    const myElement = document.createElement('div');
    myElement.className = 'change-layer ol-unselectable ol-control';

    this.changeLayerCtrl = new ChangeLayerController(
      this.renderer, {
        element: myElement
      });

    this.map = new Map({
      target: 'map',
      layers: [
          this.layerOSM
        ],
      view: this.view,
    });
    this.map.addControl(this.changeLayerCtrl);
  }

  changeLayer() {

    console.log('Changing Layer');
    switch (this.selectedLayer) {
      case customMapLayers.osm: {
        console.log('switch pwd');
        break;
      }
      case customMapLayers.pwd: {
        console.log('switch pwd');
        break;
      }

    }
  }

}
