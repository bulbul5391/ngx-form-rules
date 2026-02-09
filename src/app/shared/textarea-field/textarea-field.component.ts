import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss']
})

export class TextareaFieldComponent implements OnChanges {
    @Input() label: string = '';
    @Input() control: AbstractControl = new FormControl();
    
    get showError(): boolean {
        return (
            this.control.invalid && (this.control.dirty || this.control.touched)
        );
    }

    ngOnChanges(changes: SimpleChanges): void {
        // Force update if control has value
        if (changes['control'] && this.control && this.control.value) {
            this.control.setValue(this.control.value);
        }
    }
}
