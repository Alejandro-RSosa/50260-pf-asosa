import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { PageNotFoundComponent } from './layouts/dashboard/pages/page-not-found/page-not-found.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: "dashboard",
    canActivate: [authGuard],
    component: DashboardComponent,
    loadChildren: () => import('./layouts/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: "auth",
    loadChildren: () => import('./layouts/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: "page-not-found",
    component: PageNotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "auth/login",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
