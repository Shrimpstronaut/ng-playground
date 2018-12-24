import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskDashboardComponent} from '@task/components/task-dashboard/task-dashboard.component';
import {TaskContentComponent} from '@task/components/task-content/task-content.component';

const routes: Routes = [
  {
    path: '',
    component: TaskDashboardComponent,
    children: [
      {
        path: ':id',
        component: TaskContentComponent
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
