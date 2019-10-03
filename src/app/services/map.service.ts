import { Injectable } from '@angular/core';
import {customMapLayers} from '../shared/myEnums';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  currentLayer: customMapLayers.pwd;

  constructor() { }

  getCurrentLayer(): Observable<customMapLayers> {
    return of(this.currentLayer);
  }

}
