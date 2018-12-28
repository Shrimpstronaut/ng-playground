import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDashboardStateService {

  private _selectedAccountId = new BehaviorSubject<number>(null);

  selectedAccountId$ = this._selectedAccountId.asObservable();

  constructor() {
  }

  /**
   * Update the currently selected accountId with given id.
   *
   * @param accountId of selected post
   */
  setSelectedAccountId(accountId: number) {
    this._selectedAccountId.next(accountId);
  }
}
