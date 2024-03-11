import { TestBed } from '@angular/core/testing';

import { ShieldAuthGuard } from './shield-auth.guard';

describe('ShieldAuthGuard', () => {
  let guard: ShieldAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShieldAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
