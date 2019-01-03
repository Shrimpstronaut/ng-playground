import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AccountDataService} from '../../services/account-data.service';
import {AccountDashboardStateService} from '../../services/account-dashboard-state.service';
import {AppAccount} from '../../models/appAccount';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.sass']
})
export class AccountListComponent implements OnInit {

  accounts$ = new Observable<AppAccount[]>();
  selectedAccountId: number; // hold the currently selected account id to show it is selected

  constructor(
    private stateService: AccountDashboardStateService,
    private accountService: AccountDataService,
    private router: Router,
    ) {
  }

  ngOnInit() {
    this.stateService.setSelectedAccountId(null);
    this.accounts$ = this.accountService.findAll(); // load all available posts
    this.stateService.selectedAccountId$.subscribe(accountId => {
      this.selectedAccountId = accountId;
    });
  }


  /**
   * Click handler once an account from the list has been clicked on.
   *
   * @param account the post that was selected
   */
  selectAccount(account: AppAccount) {
    this.router.navigate(['accounts', account.id]); // activate the child route /accounts/{id}
  }

}
