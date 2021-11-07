import { TestBed } from '@angular/core/testing';

import { MaestrosServicioService } from './maestros-servicio.service';

describe('MaestrosServicioService', () => {
  let service: MaestrosServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaestrosServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
