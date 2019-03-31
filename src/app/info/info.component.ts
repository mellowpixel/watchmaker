import { Component, OnInit } from '@angular/core';
import { ScrollManagerService } from '../scroll-manager.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  pageOffsetTop = null;

  constructor(public scrollService: ScrollManagerService) { 
    // scrollService.components.push(this);
  }
  
  ngOnInit() {
  }

}
