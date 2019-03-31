import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements AfterViewInit {
  @ViewChild("listOfActors") el: ElementRef;

  public leftMargin: number;
  public activeIndx: number = 0;
  public actorsList: Array<any>;
  public listContainer: any;
  public columnsOffsets: Array<number> = [];

  constructor() { 
  }

  ngAfterViewInit() {
    this.listContainer = this.el.nativeElement;
    this.actorsList = this.el.nativeElement.querySelectorAll("li");
    this.actorsList.forEach(li => this.columnsOffsets.push(li.offsetLeft));
  }

  scrollText(direction: string) {
    var direct: Object = {
      left: -1,
      right: 1
    };

    if(this.activeIndx + direct[direction] >= 0 && this.activeIndx + direct[direction] < this.actorsList.length){
      this.activeIndx += direct[direction];
      this.leftMargin = this.listContainer.offsetLeft - this.columnsOffsets[this.activeIndx];
    }    
  }

}
