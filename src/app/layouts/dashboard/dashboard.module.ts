import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StudentsModule } from './pages/students/students.module';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { adminGuard } from '../../core/guards/admin.guard';
import { StudentsDetailComponent } from './pages/students/students-detail/students-detail.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    StudentsModule,
    MatListModule,

    RouterModule.forChild([
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "students",
        canActivate: [adminGuard],
        loadChildren: () => import('./pages/students/students.module').then((m) => m.StudentsModule)
      },
      {
        path: 'students/:id',
        component: StudentsDetailComponent,
      },
      {
        path: "courses",
        loadChildren: () => import('./pages/courses/courses.module').then((m) => m.CoursesModule)
      },
      {
        path: 'inscriptions',
        loadChildren: () => import('./pages/inscriptions/inscriptions.module').then((m) => m.InscriptionsModule),
      },
      {
        path: "**",
        redirectTo: "home",
      },
    ]),
  ],
  exports: [
    DashboardComponent
  ],
})
export class DashboardModule { }
