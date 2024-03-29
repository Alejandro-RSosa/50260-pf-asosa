import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { FontSize20Directive } from './font-size-20.directive';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ValidationErrorsPipe } from './validation-errors.pipe';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    FullNamePipe,
    FontSize20Directive,
    ValidationErrorsPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullNamePipe,
    FontSize20Directive,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ValidationErrorsPipe,
  ]
})
export class SharedModule { }
