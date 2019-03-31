import { Component, OnInit, ElementRef } from '@angular/core';
import { ScreenComponent } from '../Classes/ScreenComponent';
import { FullScreenService } from '../full-screen.service';
import { ScrollManagerService } from '../scroll-manager.service';

@Component({
  selector: 'screen-d-crew',
  templateUrl: './screen-d-crew.component.html',
  styleUrls: ['./screen-d-crew.component.scss']
})
export class ScreenDCrewComponent extends ScreenComponent {
	
	constructor(public elementRef: ElementRef, scrollService: ScrollManagerService, screenResizer: FullScreenService) {
		super("Screen D", elementRef, scrollService, screenResizer);
	}

}
