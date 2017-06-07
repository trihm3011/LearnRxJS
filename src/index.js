import Rx from 'rxjs/Rx';

var clicks = Rx.Observable.fromEvent(document, 'click');
var positions = clicks
  .do(ev => console.log(ev))
  .map(ev => ev.clientX);
positions.subscribe(x => console.log(x));