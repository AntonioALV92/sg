import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBrokerComponent } from './home-broker.component';

describe('HomeBrokerComponent', () => {
  let component: HomeBrokerComponent;
  let fixture: ComponentFixture<HomeBrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
