import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface FormRule {
  trigger: string;
  onValue: any;
  disable: string[];
  enable: string[];
}

@Injectable({
  providedIn: 'root'
})
export class NgxFormRulesService {
  private dbSnapshot: any = {};

  applyRules(form: FormGroup, rules: FormRule[]) {
    rules.forEach(rule => {
      form.get(rule.trigger)?.valueChanges.subscribe(value => {
        this.executeRule(form, rule, value, false);
      });
    });
  }

  syncRulesWithCurrentValues(form: FormGroup, rules: FormRule[]) {
    this.dbSnapshot = { ...form.getRawValue() };

    rules.forEach(rule => {
      const currentValue = form.get(rule.trigger)?.value;
      this.executeRule(form, rule, currentValue, true);
    });
  }

  private executeRule(
    form: FormGroup,
    rule: FormRule,
    currentValue: any,
    isInitialLoad: boolean
  ) {
    if (currentValue === null || currentValue === undefined) return;

    const val =
      currentValue === 'true' || currentValue === true ? true :
      currentValue === 'false' || currentValue === false ? false :
      currentValue;

    if (val === rule.onValue) {
      rule.disable.forEach(key => {
        const target = form.get(key);
        if (target) {
          target.disable({ emitEvent: false });
          if (!isInitialLoad) {
            target.setValue(null, { emitEvent: false });
          }
        }
      });

      rule.enable.forEach(key =>
        form.get(key)?.enable({ emitEvent: false })
      );

    } else {
      rule.disable.forEach(key => {
        const target = form.get(key);
        if (target) {
          target.enable({ emitEvent: false });

          if (!isInitialLoad && this.dbSnapshot[key] !== undefined) {
            target.setValue(this.dbSnapshot[key], { emitEvent: false });
          }
        }
      });
    }
  }
}
