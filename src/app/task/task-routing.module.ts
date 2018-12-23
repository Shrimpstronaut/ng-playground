import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskDashboardComponent} from '@task/components/task-dashboard/task-dashboard.component';
import {TaskDetailComponent} from '@task/components/task-detail/task-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TaskDashboardComponent,
    children: [
      {
        path: ':id',
        component: TaskDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {
}
