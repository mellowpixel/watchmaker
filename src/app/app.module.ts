import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GlobalService } from './global.service';
import { ScrollManagerService } from './scroll-manager.service';
import { FullScreenService } from './full-screen.service';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ScreenAIntroComponent } from './screen-a-intro/screen-a-intro.component';
import { InfoComponent } from './info/info.component';
import { ScreenCAboutComponent } from './screen-c-about/screen-c-about.component';
import { ScreenDCrewComponent } from './screen-d-crew/screen-d-crew.component';
import { ScreenEGalleryComponent } from './screen-e-gallery/screen-e-gallery.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ScreenFContactusComponent } from './screen-f-contactus/screen-f-contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    ScreenAIntroComponent,
    SideMenuComponent,
    InfoComponent,
    ScreenCAboutComponent,
    ScreenDCrewComponent,
    ScreenEGalleryComponent,
    TopMenuComponent,
    SidePanelComponent,
    GalleryComponent,
    ScreenFContactusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    GlobalService,
    ScrollManagerService, 
    FullScreenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
