import { Component, OnInit, ElementRef } from '@angular/core';
import { ScreenComponent } from '../Classes/ScreenComponent';
import { ScrollManagerService } from '../scroll-manager.service';
import { FullScreenService } from '../full-screen.service';

@Component({
	selector: 'screen-a-intro',
	templateUrl: './screen-a-intro.component.html',
	styleUrls: ['./screen-a-intro.component.scss']
})
export class ScreenAIntroComponent extends ScreenComponent {

	public inSight: boolean = true;

	constructor(
		public elementRef: ElementRef, 
		public scrollService: ScrollManagerService, 
		screenResizer: FullScreenService) 
	{
		super("Screen A", elementRef, scrollService, screenResizer);
	}

	public goToNextScreen() {
		this.scrollService.goToNextScreen();
	}
}
