import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRenterComponent } from './update-renter.component';

describe('UpdateRenterComponent', () => {
  let component: UpdateRenterComponent;
  let fixture: ComponentFixture<UpdateRenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
