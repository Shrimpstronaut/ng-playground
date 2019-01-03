import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from '@app/app.component';
import {LayoutComponent} from '@core/layout/layout.component';
import {ProgressSpinnerDialogComponent} from '@core/dialogs/progress-spinner-dialog/progress-spinner-dialog.component';
import {HomeComponent} from '@core/components/home/home.component';
import {NotFoundComponent} from '@core/components/not-found/not-found.component';
import {CoreRoutingModule} from '@core/core-routing.module';
import {CommonModule} from '@angular/common';
import {ThemeModule} from '@app/theme/theme.module';
import {DiscardChangesDialogComponent} from './dialogs/discard-changes-dialog/discard-changes-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProgressSpinnerDialogComponent,
    HomeComponent,
    NotFoundComponent,
    DiscardChangesDialogComponent,
  ],
  imports: [
    CoreRoutingModule,
    CommonModule,
    HttpClientModule,
    ThemeModule,
  ],
  exports: [
    RouterModule
  ],
  entryComponents: [
    ProgressSpinnerDialogComponent,
    DiscardChangesDialogComponent
  ]
})
export class CoreModule { }
