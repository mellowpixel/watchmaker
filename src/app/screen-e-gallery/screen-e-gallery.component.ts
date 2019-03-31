import { Component, OnInit, ElementRef } from '@angular/core';
import { ScreenComponent } from '../Classes/ScreenComponent';
import { FullScreenService } from '../full-screen.service';
import { ScrollManagerService } from '../scroll-manager.service';
import { GlobalService } from '../../app/global.service';

@Component({
  selector: 'screen-e-gallery',
  templateUrl: './screen-e-gallery.component.html',
  styleUrls: ['./screen-e-gallery.component.scss']
})
export class ScreenEGalleryComponent extends ScreenComponent {

	constructor(
		public elementRef: ElementRef, 
		public global: GlobalService,
		scrollService: ScrollManagerService, 
		screenResizer: FullScreenService
	) {
		super("Screen E", elementRef, scrollService, screenResizer);
		// scrollService.docHeight = this.height;
	}


	public previousImage() {
		this.global.galleries.get("general").previousImage();
	}

	public nextImage() {
		this.global.galleries.get("general").nextImage();
	}
}
