/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IngresoService } from './ingreso.service';

describe('Service: Ingreso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngresoService]
    });
  });

  it('should ...', inject([IngresoService], (service: IngresoService) => {
    expect(service).toBeTruthy();
  }));
});
