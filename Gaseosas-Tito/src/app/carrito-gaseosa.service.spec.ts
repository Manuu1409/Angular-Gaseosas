import { TestBed } from '@angular/core/testing';

import { CarritoGaseosaService } from './carrito-gaseosa.service';

describe('CarritoGaseosaService', () => {
  let service: CarritoGaseosaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoGaseosaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
