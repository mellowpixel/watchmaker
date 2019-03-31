import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFContactusComponent } from './screen-f-contactus.component';

describe('ScreenFContactusComponent', () => {
  let component: ScreenFContactusComponent;
  let fixture: ComponentFixture<ScreenFContactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenFContactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenFContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
