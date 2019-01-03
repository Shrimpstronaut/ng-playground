import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AppAccount} from '@account/models/appAccount';
import {ComponentWithForm} from '@core/models/component-with-form';
import {AccountDataService} from '@account/services/account-data.service';

@Component({
  selector: 'account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.sass']
})
export class AccountDetailComponent implements ComponentWithForm, OnInit {
  account$: Observable<AppAccount>;
  @ViewChild('editForm') editForm;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountDataService
  ) {
    this.route.params.subscribe(params => {
      this.getAccountDetailsById(Number(params.id));
    });
  }

  ngOnInit(): void {
    console.log('init');
  }

  hasUnsavedChanges(): boolean {
    return !this.editForm.registerForm.pristine;
  }

  /**
   * Request account details for given account id.
   *
   * @param accountId of the account to be fetched from the api
   */
  getAccountDetailsById(accountId: number) {
    this.account$ = this.accountService.findById(accountId).pipe();
  }

}
