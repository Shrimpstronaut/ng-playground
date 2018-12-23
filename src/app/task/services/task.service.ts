import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Task} from '@task/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = environment.api.baseUrl + '/todos';

  constructor(private http: HttpClient) {
  }

  /**
   * Request all existing tasks.
   */
  findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  /**
   * Request details for a single task with given id.
   *
   * @param taskId of the task to be retrieved
   */
  findById(taskId: number): Observable<Task> {
    console.log('finding by id', taskId);
    return this.http.get<Task>(this.baseUrl + '/' + taskId);

  }
}
