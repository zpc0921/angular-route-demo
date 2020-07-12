import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToCheckComponent } from './to-check.component';

describe('ToCheckComponent', () => {
  let component: ToCheckComponent;
  let fixture: ComponentFixture<ToCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
