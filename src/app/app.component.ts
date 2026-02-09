import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxFormRulesService } from 'ngx-form-rules';
import { RULES } from './checking-rules.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-angular-app';
  form: FormGroup;
  private readonly FORM_RULES = RULES;

  constructor(
    private fb: FormBuilder,
    private ruleEngine: NgxFormRulesService
  ) {  }

  ngOnInit(): void {

    this.form = this.fb.group({     
      valueA: [''],
      valueB: [''],
      valueC: ['']
    });

    this.ruleEngine.applyRules(this.form, this.FORM_RULES); // Apply rules to the form    
    // this.onLoadData();
  }
  /*
  onLoadData(): void {
      this.partThreeService.getPartThreeByUuId(this.id).subscribe(
        (res) => {
          if (res && res.id) {
            this.form.patchValue(res);
            this.ruleEngine.syncRulesWithCurrentValues(this.form, this.FORM_RULES);
          }
          this.isDataLoaded = true;},
        (error) => { this.isDataLoaded = true; }
      );
  }
  */
}
