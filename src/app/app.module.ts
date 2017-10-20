import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MODULE_COMPONENTS, MODULE_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { NavbarComponent } from './main/shared/navbar/navbar.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
//
// import { DashboardModule } from './main/dashboard/dashboard.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    MODULE_COMPONENTS,
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    MainComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    // DashboardModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([]),
    RouterModule.forChild(MODULE_ROUTES)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
