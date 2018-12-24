import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '@task/models/task';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '@task/services/task.service';
import {TaskDashboardStateService} from '@task/services/task-dashboard-state.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.sass']
})
export class TaskDetailComponent {

  @Input() set taskId(taskId) {
    this.getTaskDetailsById(taskId);
  }
  task$ = new Observable<Task>();
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private stateService: TaskDashboardStateService
  ) {
  }

  /**
   * Request task details for given task id.
   *
   * @param taskId of the task to be fetched from the api
   */
  getTaskDetailsById(taskId: number) {
    this.stateService.setSelectedTaskId(taskId);
    this.isLoading = true;
    this.task$ = this.taskService.findById(taskId).pipe(
      tap(() => {
        this.isLoading = false;
      })
    );
  }

}
