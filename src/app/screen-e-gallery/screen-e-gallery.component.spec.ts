import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenEGalleryComponent } from './screen-e-gallery.component';

describe('ScreenEGalleryComponent', () => {
  let component: ScreenEGalleryComponent;
  let fixture: ComponentFixture<ScreenEGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenEGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenEGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
