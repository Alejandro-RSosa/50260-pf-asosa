import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { MatTableModule } from '@angular/material/table';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsDetailComponent } from './students-detail/students-detail.component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentFormComponent,
    StudentsDetailComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    SharedModule,
    StudentsRoutingModule,
  ],
  exports: [
    StudentsComponent
  ]
})
export class StudentsModule { }
