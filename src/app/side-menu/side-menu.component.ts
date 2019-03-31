import { Component, OnInit } from '@angular/core';
import { ScreenCAboutComponent } from '../screen-c-about/screen-c-about.component';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(public parentScreen: ScreenCAboutComponent) { }

  ngOnInit() {
  }

}
