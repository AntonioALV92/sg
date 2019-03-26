import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterProfilerComponent } from './renter-profiler.component';

describe('RenterProfilerComponent', () => {
  let component: RenterProfilerComponent;
  let fixture: ComponentFixture<RenterProfilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenterProfilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterProfilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
