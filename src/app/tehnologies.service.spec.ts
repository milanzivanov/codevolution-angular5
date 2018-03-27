import { TestBed, inject } from '@angular/core/testing';

import { TehnologiesService } from './tehnologies.service';

describe('TehnologiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TehnologiesService]
    });
  });

  it('should be created', inject([TehnologiesService], (service: TehnologiesService) => {
    expect(service).toBeTruthy();
  }));
});
