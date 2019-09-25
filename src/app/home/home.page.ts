import {Component, Renderer2} from '@angular/core';
import {MyMap} from './myMap';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private renderer: Renderer2) {

    const container = renderer.createElement('div');

    const button = renderer.createElement('button');
    button.className = 'choose-opts';
    button.innerHTML = 'Options';
    console.log(container);

    renderer.appendChild(container, button);
    const myMap = new MyMap();
  }

}
