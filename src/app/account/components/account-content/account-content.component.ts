import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountDashboardStateService} from '@account/services/account-dashboard-state.service';

@Component({
  selector: 'account-content',
  templateUrl: './account-content.component.html',
  styleUrls: ['./account-content.component.sass']
})
export class AccountContentComponent implements OnInit {
  accountId: number;
  navLinks = [
    {
      label: 'Details',
      path: './'
    }, {
      label: 'Notes',
      path: './notes'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private state: AccountDashboardStateService
  ) {
  }

  ngOnInit() {
    // check for updates on the route parameters
    this.route.params.subscribe(params => {
      this.accountId = Number(params.id);
      this.state.setSelectedAccountId(this.accountId);
    });
  }

}
