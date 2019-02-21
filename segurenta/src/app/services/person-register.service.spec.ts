import { TestBed } from '@angular/core/testing';

import { PersonRegisterService } from './person-register.service';

describe('PersonRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonRegisterService = TestBed.get(PersonRegisterService);
    expect(service).toBeTruthy();
  });
});
