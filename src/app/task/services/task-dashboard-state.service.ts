import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskDashboardStateService {

  private _selectedTaskId = new BehaviorSubject<number>(null);

  selectedTaskId$ = this._selectedTaskId.asObservable();

  constructor() {
  }

  /**
   * Update the currently selected taskId with given id.
   *
   * @param taskId of selected post
   */
  setSelectedTaskId(taskId: number) {
    this._selectedTaskId.next(taskId);
  }
}
