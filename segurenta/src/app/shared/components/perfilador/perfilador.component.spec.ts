import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfiladorComponent } from './perfilador.component';

describe('PerfiladorComponent', () => {
  let component: PerfiladorComponent;
  let fixture: ComponentFixture<PerfiladorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfiladorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfiladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
