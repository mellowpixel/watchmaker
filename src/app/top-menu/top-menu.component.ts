import { Component, OnInit } from '@angular/core';
import { ScrollManagerService } from '../scroll-manager.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  public scrollService: ScrollManagerService;
  public scrolledRatio: number;

  constructor(scrollService: ScrollManagerService) { 
    this.scrollService = scrollService;
  }

  ngOnInit() {
  }

}
