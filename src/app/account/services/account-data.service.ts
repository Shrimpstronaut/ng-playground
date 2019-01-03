import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AppAccount} from '@account/models/appAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  private baseUrl = environment.api.baseUrl + '/accounts';

  constructor(private http: HttpClient) {
  }

  /**
   * Request all existing accounts.
   */
  findAll(): Observable<AppAccount[]> {
    return this.http.get<AppAccount[]>(this.baseUrl);
  }

  /**
   * Request details for a single account with given id.
   *
   * @param accountId of the account to be retrieved
   */
  findById(accountId: number): Observable<AppAccount> {
    return this.http.get<AppAccount>(this.baseUrl + '/' + accountId);

  }
}
