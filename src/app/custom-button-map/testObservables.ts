import {Observable, of} from 'rxjs';

export class TestObservables  {
  myObservable;
  myObserver;

  constructor() {
    this.myObservable = of(1, 2 , 3 );
    this.myObserver = {
      next: x => console.log(x),
      error: err => console.log(err),
      complete: () => console.log('Completed')
    };
  }

  sub() {
    this.myObservable.subscribe(this.myObserver);
  }

  fromEvent(target, eventName) {
    return new Observable((observer) => {
      const handler = (e) => observer.next(e);

      // Add the event handler to the target
      target.addEventListener(eventName, handler);

      return () => {
        // Detach the event handler from the target
        target.removeEventListener(eventName, handler);
      };
    });
  }



}
