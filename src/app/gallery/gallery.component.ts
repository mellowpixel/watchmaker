import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../app/global.service';
import { FullScreenService } from '../full-screen.service';
import { Observer } from '../Classes/ObserverSubscriber';

@Component({
  selector: 'gallery-component',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, Observer {
  @Input() galleryID: string;

  public imagesSet: Array<string> = [];
  public imgConfig: Object = {};
  public imageIndx: number;
  public timer: any;
  public galleryDir: string = "/assets/gallery";
  public resolution: string = "1000px";

  
  public allImages: Object = {
    meet_the_crew: [
      '1_CREW.jpg',
      '2_CREW.jpg',
      '3_CREW.jpg',
      // '4_CREW.jpg',
      '5_CREW.jpg',
      '6_CREW.jpg',
      '7_CREW.jpg',
      '8_CREW.jpg',
      '9_CREW.jpg'
    ],

    general: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
      '10.jpg',
      '11.jpg',
      '12.jpg',
      '13.jpg',
      '14.jpg',
      '15.jpg',
      '16.jpg',
      '17.jpg',
      '18.jpg',
      '19.jpg',
      '20.jpg',
      '21.jpg',
      '22.jpg',
    ],
  };

  constructor(private global: GlobalService, private screen: FullScreenService) { 
    screen.subscribe(this);
  }

  ngOnInit() {
    this.imagesSet = this.allImages[this.galleryID];
    this.global.galleries.set(this.galleryID, this);
    this.update();
    this.resetGallery();
    this.timer = setInterval(()=>{this.changePicture(1)}, 6000);
  }


  public update() {
    const resolutions = {
      meet_the_crew: [700, 1000, 1400],
      general: [1000, 2000, 3000]
    };
    for(let i =0; i < resolutions[this.galleryID].length; i++){
      this.resolution = `${resolutions[this.galleryID][i]}px`;

      if(resolutions[this.galleryID][i] > this.screen.windowWidth) {
        break;
      } 
    }
  }




  public getImage(src: string) {
    let path = `${this.galleryDir}/${this.galleryID}/${this.resolution}/${src}`;
    return `url(${path})`;
  }



  changePicture(direction: number) {
    
    console.log(this.galleryID, this.imageIndx);
    this.imageIndx += direction;
    
    if(this.imageIndx == this.imagesSet.length){
      this.resetGallery();
    }

    if(this.imageIndx == -1){
      this.imageIndx = this.imagesSet.length - 1;
    }
    
    this.imagesSet.forEach((img, ind) => {
      if(this.imageIndx !== ind){
        this.imgConfig[img] = { opacity: 0 };
      }  
    });

    this.imgConfig[this.imagesSet[this.imageIndx]].opacity = 1;
  }



  resetGallery() {
      this.imageIndx = 0;
      this.imagesSet.forEach((img, ind) => {
          this.imgConfig[img] = ind != 0 ? { opacity: 0 } : { opacity: 1 };
      });
  }

  stopTimer() {
    this.timer && clearInterval(this.timer);
  }

  public previousImage() {
    this.stopTimer();
    this.changePicture(-1);
  }

  public nextImage() {
    this.stopTimer();
    this.changePicture(1);
  }

}
