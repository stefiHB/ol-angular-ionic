import {Injectable} from '@angular/core';
import {customMapLayers} from '../shared/myEnums';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  // tslint:disable-next-line:variable-name
  private layer = new BehaviorSubject<customMapLayers>(customMapLayers.pwd);

  constructor() { }


  getLayer() {
    return this.layer.asObservable();
  }

  setLayer(mapLayer: customMapLayers) {
    this.layer.next(mapLayer);
    console.log('Setting new value...', this.layer.value);
  }
}
