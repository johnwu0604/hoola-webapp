import { Route } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { FinancesComponent } from './finances/finances.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { NotesComponent } from './notes/notes.component';
import { CalendarComponent } from './calendar/calendar.component';

export const MODULE_ROUTES: Route[] =[
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'finances', component: FinancesComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'calendar', component: CalendarComponent }

]

export const MODULE_COMPONENTS = [
  TasksComponent,
  FinancesComponent,
  ShoppingComponent,
  NotesComponent,
  CalendarComponent
]
