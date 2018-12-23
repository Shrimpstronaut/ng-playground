import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {TaskService} from '@task/services/task.service';
import {TaskDashboardStateService} from '@task/services/task-dashboard-state.service';
import {Task} from '@task/models/task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {

  tasks$ = new Observable<Task[]>();

  displayedColumns: string[] = ['title']; // configuration for the list component
  selectedTaskId: number; // hold the currently selected task id to show it is selected

  constructor(
    private stateService: TaskDashboardStateService,
    private taskService: TaskService,
    private router: Router,
    ) {
  }

  ngOnInit() {
    this.stateService.setSelectedTaskId(null);
    this.tasks$ = this.taskService.findAll(); // load all available posts
    this.stateService.selectedTaskId$.subscribe(postId => this.selectedTaskId = postId);
  }


  /**
   * Click handler once a post from the list has been clicked on.
   *
   * @param task the post that was selected
   */
  selectTask(task: Task) {
    this.router.navigate(['tasks', task.id]); // activate the child route /posts/{id}
  }

}