/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductBeService } from './product-be.service';

describe('Service: ProductBe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductBeService]
    });
  });

  it('should ...', inject([ProductBeService], (service: ProductBeService) => {
    expect(service).toBeTruthy();
  }));
});
