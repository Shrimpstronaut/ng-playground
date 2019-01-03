import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ComponentWithForm} from '@core/models/component-with-form';
import {DiscardChangesDialogComponent} from '@core/dialogs/discard-changes-dialog/discard-changes-dialog.component';
import {MatDialog} from '@angular/material';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComponentWithFormGuard implements CanDeactivate<ComponentWithForm> {

  constructor(public dialog: MatDialog) {
  }

  canDeactivate(
    component: ComponentWithForm,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (component.hasUnsavedChanges()) {
      const dialogRef = this.dialog.open(DiscardChangesDialogComponent);

      return dialogRef.afterClosed().pipe(
        map(result => {
          console.log('result', result);
          return result;
        })
      );
    } else {
      return true;
    }

  }
}
