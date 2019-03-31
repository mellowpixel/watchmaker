import { Component, OnInit, ElementRef } from '@angular/core';
import { ScreenComponent } from '../Classes/ScreenComponent';
import { ScrollManagerService } from '../scroll-manager.service';
import { FullScreenService } from '../full-screen.service';

@Component({
  selector: 'screen-c-about',
  templateUrl: './screen-c-about.component.html',
  styleUrls: ['./screen-c-about.component.scss']
})
export class ScreenCAboutComponent extends ScreenComponent {

	constructor(public elementRef: ElementRef, scrollService: ScrollManagerService, screenResizer: FullScreenService) {
		super("Screen C", elementRef, scrollService, screenResizer);
	}

}
