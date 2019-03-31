import { Injectable } from '@angular/core';
import { GalleryComponent } from '../app/gallery/gallery.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public galleries: Map<String, GalleryComponent>;

  constructor() {
    this.galleries = new Map<String, GalleryComponent>();
  }

}