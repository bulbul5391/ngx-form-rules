import { TestBed } from '@angular/core/testing';

import { NgxFormRulesService } from './ngx-form-rules.service';

describe('NgxFormRulesService', () => {
  let service: NgxFormRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFormRulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
