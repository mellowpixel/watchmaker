import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCAboutComponent } from './screen-c-about.component';

describe('ScreenCAboutComponent', () => {
  let component: ScreenCAboutComponent;
  let fixture: ComponentFixture<ScreenCAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenCAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenCAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
