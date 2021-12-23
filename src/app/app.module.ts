import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { UserMaterialModule } from './user-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppsettingComponent } from './appsetting/appsetting.component';
import { TargetDashboardComponent } from './target-dashboard/target-dashboard.component';
import { TargetTableComponent } from './components/target-table/target-table.component';
import { SubTargetTableComponent } from './components/sub-target-table/sub-target-table.component';
import { MethodTableComponent } from './components/method-table/method-table.component';
import { TargetDetailComponent } from './target-detail/target-detail.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataService } from './shared/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    AppsettingComponent,
    TargetDashboardComponent,
    TargetTableComponent,
    SubTargetTableComponent,
    MethodTableComponent,
    TargetDetailComponent,
    MenuListItemComponent,
    MainComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    UserMaterialModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
