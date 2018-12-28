import {Component, Input, OnInit} from '@angular/core';
import {AppAccount} from '@account/models/appAccount';

@Component({
  selector: 'account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.sass']
})
export class AccountEditComponent implements OnInit {

  @Input() account: AppAccount;

  ngOnInit(): void {
  }

}
