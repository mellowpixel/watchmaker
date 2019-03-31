import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenDCrewComponent } from './screen-d-crew.component';

describe('ScreenDCrewComponent', () => {
  let component: ScreenDCrewComponent;
  let fixture: ComponentFixture<ScreenDCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenDCrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenDCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
