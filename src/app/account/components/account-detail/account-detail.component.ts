import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {AccountDashboardStateService} from '@app/account/services/account-dashboard-state.service';
import {AccountService} from '@app/account/services/account.service';
import {AppAccount} from '@account/models/appAccount';

@Component({
  selector: 'account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.sass']
})
export class AccountDetailComponent {

  @Input() set accountId(accountId) {
    this.getAccountDetailsById(accountId);
  }
  account$ = new Observable<AppAccount>();
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private stateService: AccountDashboardStateService
  ) {
  }

  /**
   * Request account details for given account id.
   *
   * @param accountId of the account to be fetched from the api
   */
  getAccountDetailsById(accountId: number) {
    this.stateService.setSelectedAccountId(accountId);
    this.isLoading = true;
    this.account$ = this.accountService.findById(accountId).pipe(
      tap(() => {
        this.isLoading = false;
      })
    );
  }

}
