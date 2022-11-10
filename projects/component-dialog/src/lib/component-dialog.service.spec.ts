import { TestBed } from '@angular/core/testing';

import { ComponentDialogService } from './component-dialog.service';

describe('ComponentDialogService', () => {
  let service: ComponentDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
