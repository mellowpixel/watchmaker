import { Injectable } from '@angular/core';
import { ScreenComponent } from './Classes/ScreenComponent';
import { Subscriber, Observer } from './Classes/ObserverSubscriber';

@Injectable()
export class FullScreenService implements Subscriber {

  private screens: ScreenComponent[] = [];
  public windowWidth: number;
  public windowHeight: number;
  private observers: Array<Observer>;

  constructor() { 
    window.addEventListener('resize', ()=>{ this.windowResizeHandler(); });
    this.observers = new Array<Observer>();
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }



  init(scr) {
    this.screens.push(scr);
    this.resizeSection(scr);
  }


  public subscribe(observer: Observer) {
    this.observers.push(observer);
  }


  public notify() {
    this.observers.forEach(observer => {
      observer.update();
    });
  }


  protected resizeSection(scr) {
    scr.width = this.windowWidth = window.innerWidth;
    scr.height = this.windowHeight = window.innerHeight;
    scr.offsetTop = scr.elementRef.nativeElement.offsetTop;
    scr.updateElementInfo && scr.updateElementInfo();
  }



  protected windowResizeHandler() {
    this.screens.forEach( screen => { this.resizeSection(screen); })
    this.notify();
  }



}
