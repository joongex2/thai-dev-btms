import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { AuthGuard } from './guards/auth.guard';
import { NonAuthGuard } from './guards/non-auth.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NewTargetComponent } from './new-target/new-target.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TargetDashboardComponent } from './target-dashboard/target-dashboard.component';
import { TargetDetailComponent } from './target-detail/target-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: TargetDashboardComponent
      },
      {
        path: 'target-dashboard',
        component: TargetDashboardComponent
      },
      {
        path: 'target-detail/:runningNo',
        component: TargetDetailComponent
      },
      {
        path: 'new-target',
        component: NewTargetComponent
      },
      {
        path: 'dashboard1',
        component: Dashboard1Component
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuard]
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
