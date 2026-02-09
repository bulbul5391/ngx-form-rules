import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormRulesComponent } from './ngx-form-rules.component';

describe('NgxFormRulesComponent', () => {
  let component: NgxFormRulesComponent;
  let fixture: ComponentFixture<NgxFormRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFormRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
