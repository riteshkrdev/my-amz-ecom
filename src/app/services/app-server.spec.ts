import { TestBed } from '@angular/core/testing';

import { AppServer } from './app-server';

describe('AppServer', () => {
  let service: AppServer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppServer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
