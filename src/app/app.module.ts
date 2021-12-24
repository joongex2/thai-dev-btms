import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { UserMaterialModule } from './user-material.module';

import { AppComponent } from './app.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AppsettingComponent } from './appsetting/appsetting.component';
import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MethodTableComponent } from './components/method-table/method-table.component';
import { SubTargetTableComponent } from './components/sub-target-table/sub-target-table.component';
import { TargetTableComponent } from './components/target-table/target-table.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { NewTargetComponent } from './new-target/new-target.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TargetDashboardComponent } from './target-dashboard/target-dashboard.component';
import { TargetDetailComponent } from './target-detail/target-detail.component';

import { AppService } from './shared/services/app.service';
import { DataService } from './shared/services/data.service';
import { DropdownMenuComponent } from './components/dropdown/dropdown-menu/dropdown-menu.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';

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
    NotFoundComponent,
    NewTargetComponent,
    LoginComponent,
    ButtonComponent,
    UserComponent,
    DropdownComponent,
    DropdownMenuComponent,
    Dashboard1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    UserMaterialModule,
    NgbModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }) 
  ],
  providers: [
    DataService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
