import { OnInit, ElementRef } from "@angular/core";
import { FullScreenService } from '../full-screen.service';
import { ScrollManagerService } from '../scroll-manager.service';

export class ScreenComponent implements OnInit
{

	// public fullSizeService: FullScreenService;
	// public scrollService: ScrollManagerService;
	public elementRef: ElementRef;
	public name: string = null;
	public screenInfo: string;
	public pageOffsetTop: number;
	public offsetTop: number;
	public height: number;
	public percentsScrolled: number;
	public inSight: boolean;
	public scrolledRatio: number;

	constructor(componentName: string, elementR: ElementRef, scrollService: ScrollManagerService, fullScreen: FullScreenService) {
		this.name = componentName;
		this.elementRef = elementR;

		fullScreen.init(this);
		scrollService.init(this);
	}

	ngOnInit() {}

	ngAfterViewInit() {
		this.offsetTop = this.elementRef.nativeElement.offsetTop;
	}

	updateElementInfo(str){
		this.screenInfo = str;
	}
}