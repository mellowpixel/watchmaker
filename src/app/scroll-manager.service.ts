import { Injectable, HostListener } from '@angular/core';
import { ScreenComponent } from './Classes/ScreenComponent';

@Injectable()
export class ScrollManagerService {

	public scrollMethod: string = "queue";
	public components: ScreenComponent[] = [];
	public inSightComponentIndex = 0;
	public scrollThreshold: number = 300;
	public docHeight: number = 0;
	public stillScrolling = false;
	public interval = null;
	private pageOffsetTop = null
	


	constructor() {
		document.removeEventListener("scroll", this.scrollHandler);
		document.addEventListener("scroll", this.scrollHandler);
	}



	public init(cmp: ScreenComponent): void {
		this.components.push(cmp);
	}

	

	public scrollHandler = (e) => {;
		
		switch(this.scrollMethod){
			case "queue": this.queuedScroll(); break;
			case "gradual": this.gradualScroll(); break;
			default: this.gradualScroll(); break;
		}
	}



	private gradualScroll(): void {
		this.components.forEach(element => {
			this.pageOffsetTop = window.scrollY;
			this.setPositionProperties(element);
			this.isInSight(element);
			this.percentsOfElementScrolled(element);
			// element.updateElementInfo();
		});
	}




	private queuedScroll(): void {
		var nextIndex = null;
		var middle = document.documentElement.scrollHeight / 10;
		var scrolledBy = null;

		scrolledBy = window.scrollY;

		window.scrollTo(0, middle);

		if(Math.abs(scrolledBy - middle) > 10) 
		{
			nextIndex = this.inSightComponentIndex + (scrolledBy > middle ? 1 : -1);
			
			console.log("Scroll Length:", (scrolledBy - middle), "Current index", this.inSightComponentIndex, "nextIndex", nextIndex);
			
			if(this.components[nextIndex] !== undefined){
				document.removeEventListener("scroll", this.scrollHandler);
				document.addEventListener("scroll", this.scrollToMiddle);
				this.stillScrolling = true;

				this.interval = setInterval(this.isScrolling, 200);

				this.inSightComponentIndex = nextIndex;
				this.components.forEach((cmp, indx) => { 
					cmp.inSight = (indx == nextIndex); 
				});
			}
		}
	}


	public scrollToMiddle = () => {
		window.scrollTo(0, document.documentElement.scrollHeight / 10);
		this.stillScrolling = true;
	}

	public isScrolling = () => {
		if(this.stillScrolling) {
			this.stillScrolling = false;
		} else {
			clearInterval(this.interval);
			document.removeEventListener("scroll", this.scrollToMiddle);
			document.addEventListener("scroll", this.scrollHandler);
		}
	}


	private setPositionProperties(element): void {
		element.pageOffsetTop = this.pageOffsetTop;
	}



	private isInSight(element): void {
		element.inSight = (element.offsetTop <= window.scrollY) && (element.offsetTop + element.height >= window.scrollY);
		
	}


	private percentsOfElementScrolled(element): void {
		if(element.inSight){
			element.percentsScrolled = Math.round((this.pageOffsetTop - element.offsetTop) / (element.height / 100));
			element.scrolledRatio = 1 / 100 * element.percentsScrolled;
		}
	}


	public goToNextScreen() {
		let nextIndex = this.inSightComponentIndex + 1;
						
		if(this.components[nextIndex] !== undefined){
			this.inSightComponentIndex = nextIndex;
			this.components.forEach((cmp, indx) => { 
				cmp.inSight = (indx == nextIndex); 
			});
		}
	}

}
