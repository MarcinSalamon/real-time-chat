import { TestBed } from '@angular/core/testing';

import { ChathandlerService } from './chathandler.service';

describe('ChathandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChathandlerService = TestBed.get(ChathandlerService);
    expect(service).toBeTruthy();
  });
});
