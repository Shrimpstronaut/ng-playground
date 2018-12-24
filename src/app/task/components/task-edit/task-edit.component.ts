import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '@task/models/task';

@Component({
  selector: 'task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.sass']
})
export class TaskEditComponent implements OnInit {

  @Input() task$: Observable<Task>;

  ngOnInit(): void {
  }

}
