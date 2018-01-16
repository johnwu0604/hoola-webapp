import { Route } from '@angular/router'
import { MainComponent } from './main/main.component'
import { LoginComponent } from './login/login.component'
import { TasksComponent } from './main/dashboard/tasks/tasks.component'
import { FinancesComponent } from './main/dashboard/finances/finances.component'
import { ShoppingComponent } from './main/dashboard/shopping/shopping.component'
import { NotebooksComponent } from './main/dashboard/notebooks/notebooks.component'
import { NoteComponent } from './main/dashboard/notebooks/note/note.component'
import { CalendarComponent } from './main/dashboard/calendar/calendar.component'
import { SignupComponent} from './signup/signup.component'

export const MODULE_ROUTES: Route[] =[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      { path: 'tasks', component: TasksComponent },
      { path: 'finances', component: FinancesComponent },
      { path: 'shopping', component: ShoppingComponent },
      { path: 'notebooks', component: NotebooksComponent },
      { path: 'notebooks/:id', component: NoteComponent },
      { path: 'calendar', component: CalendarComponent }
    ]
  }
]

export const MODULE_COMPONENTS = [
  LoginComponent,
  MainComponent,
  TasksComponent,
  FinancesComponent,
  ShoppingComponent,
  NotebooksComponent,
  CalendarComponent,
  NoteComponent
]
