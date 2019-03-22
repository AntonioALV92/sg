import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRequirementsComponent } from './show-requirements.component';

describe('ShowRequirementsComponent', () => {
  let component: ShowRequirementsComponent;
  let fixture: ComponentFixture<ShowRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
