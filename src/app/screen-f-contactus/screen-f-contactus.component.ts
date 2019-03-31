import { Component, OnInit, ElementRef} from '@angular/core';
import { ScreenComponent } from '../Classes/ScreenComponent';
import { FullScreenService } from '../full-screen.service';
import { ScrollManagerService } from '../scroll-manager.service';

@Component({
  selector: 'screen-f-contactus',
  templateUrl: './screen-f-contactus.component.html',
  styleUrls: ['./screen-f-contactus.component.scss']
})
export class ScreenFContactusComponent extends ScreenComponent {

  constructor(public elementRef: ElementRef, scrollService: ScrollManagerService, screenResizer: FullScreenService) {
		super("Screen D", elementRef, scrollService, screenResizer);
	}

}
