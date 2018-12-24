import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {TaskDashboardComponent} from '@task/components/task-dashboard/task-dashboard.component';
import {TaskDetailComponent} from '@task/components/task-detail/task-detail.component';
import {TaskListComponent} from '@task/components/task-list/task-list.component';
import {TaskRoutingModule} from '@task/task-routing.module';
import {ThemeModule} from '@app/theme/theme.module';
import {TaskEditComponent} from './components/task-edit/task-edit.component';
import {TaskContentComponent} from './components/task-content/task-content.component';

@NgModule({
  declarations: [
    TaskDashboardComponent,
    TaskDetailComponent,
    TaskListComponent,
    TaskEditComponent,
    TaskContentComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ThemeModule
  ],
  providers: []
})
export class TaskModule { }
