import { TestBed, inject } from '@angular/core/testing';

import { BillingCycleService } from './billing-cycle.service';

describe('BillingCycleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillingCycleService]
    });
  });

  it('should be created', inject([BillingCycleService], (service: BillingCycleService) => {
    expect(service).toBeTruthy();
  }));
});
