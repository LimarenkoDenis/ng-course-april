import { TestBed, inject } from '@angular/core/testing';

import { Products.ServiceService } from './products.service.service';

describe('Products.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Products.ServiceService]
    });
  });

  it('should be created', inject([Products.ServiceService], (service: Products.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
