import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.sass']
})
export class AccountEditComponent implements OnInit {
  @Input() set account(account) {
    this.currentAccount = account;
    this.registerForm.reset(this.currentAccount);
  }

  registerForm: FormGroup;
  submitted = false;
  currentAccount;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      bio: [''],
    });
  }

  ngOnInit(): void {
    this.registerForm.disable();
  }

  edit() {
    this.registerForm.enable();
  }

  cancel() {
    this.registerForm.reset(this.currentAccount);
    this.registerForm.disable();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

  }

}
