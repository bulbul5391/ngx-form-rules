import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

export interface RadioOption1 {
  label: string;
  value: any;
  subLabel?: string;
}

export interface RadioOption2 {
  label: string;
  value: any;
  subLabel?: string;
}

@Component({
  selector: 'app-radio-field',
  templateUrl: './radio-field.component.html',
  styleUrls: ['./radio-field.component.scss']
})
export class RadioFieldComponent {
  @Input() label: string = '';
  @Input() control: AbstractControl = new FormControl();
  @Input() required: boolean = false;

  @Input() option1!: RadioOption1;
  @Input() option2!: RadioOption2;

  get showError(): boolean {
    return this.control?.invalid && (this.control?.dirty || this.control?.touched);
  }
}
