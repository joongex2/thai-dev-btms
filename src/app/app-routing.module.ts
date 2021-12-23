import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TargetDashboardComponent } from './target-dashboard/target-dashboard.component';
import { TargetDetailComponent } from './target-detail/target-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'target-dashboard',
        component: TargetDashboardComponent
      },
      {
        path: 'target-detail/:runningNo',
        component: TargetDetailComponent
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
