import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, MatButtonModule, MatButtonToggleModule } from '@angular/material'
import { CalendarModule } from 'angular-calendar'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { MODULE_COMPONENTS, MODULE_ROUTES } from './app.routes'

import { AppComponent } from './app.component'
import { SidebarComponent } from './main/sidebar/sidebar.component'
import { NavbarComponent } from './main/navbar/navbar.component'
import { DashboardComponent } from './main/dashboard/dashboard.component'
import { MainComponent } from './main/main.component'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { FinanceFilterPipe } from './pipes/finances.pipe'

@NgModule({
  declarations: [
    MODULE_COMPONENTS,
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    FinanceFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    NgbModule.forRoot(),
    CalendarModule.forRoot(),
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
