import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { TasksComponent } from './tasks/tasks.component';
import { FinancesComponent } from './finances/finances.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { NotesComponent } from './notes/notes.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  imports: [
    RouterModule.forChild(MODULE_ROUTES)
  ],
  declarations: [ MODULE_COMPONENTS, TasksComponent, FinancesComponent, ShoppingComponent, NotesComponent, CalendarComponent ]
})

export class DashboardModule{}
