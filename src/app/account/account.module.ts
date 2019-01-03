import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ThemeModule} from '@app/theme/theme.module';
import {AccountDashboardComponent} from '@app/account/components/account-dashboard/account-dashboard.component';
import {AccountDetailComponent} from '@app/account/components/account-detail/account-detail.component';
import {AccountRoutingModule} from '@account/account-routing.module';
import {AccountListComponent} from '@account/components/account-list/account-list.component';
import {AccountEditComponent} from '@account/components/account-edit/account-edit.component';
import {AccountContentComponent} from '@account/components/account-content/account-content.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccountNotesComponent} from './components/account-notes/account-notes.component';

@NgModule({
  declarations: [
    AccountDetailComponent,
    AccountDashboardComponent,
    AccountListComponent,
    AccountEditComponent,
    AccountContentComponent,
    AccountNotesComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AccountModule {
}
