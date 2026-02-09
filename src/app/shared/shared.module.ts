import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaFieldComponent } from './textarea-field/textarea-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioFieldComponent } from './radio-field/radio-field.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from "@angular/material/divider";

const _materialModule = [
  MatRadioModule,
  MatInputModule,
  MatCardModule,
  MatDividerModule
];

@NgModule({
  declarations: [
    TextareaFieldComponent,
    RadioFieldComponent
  ],
  exports: [
    TextareaFieldComponent,
    RadioFieldComponent,
    _materialModule
  ],
  imports: [
    ReactiveFormsModule,
    _materialModule,
    CommonModule
  ]
  
})
export class SharedModule { }
