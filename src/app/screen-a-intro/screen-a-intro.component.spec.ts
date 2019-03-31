import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAIntroComponent } from './screen-a-intro.component';

describe('ScreenAIntroComponent', () => {
  let component: ScreenAIntroComponent;
  let fixture: ComponentFixture<ScreenAIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenAIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
