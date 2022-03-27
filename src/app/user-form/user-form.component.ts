import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    userInfoForm: new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^\\+[0-9]*$"),
      Validators.minLength(10)])
    })
  });
  constructor() { }

  ngOnInit(): void {
  }

  // updateName() {
  //   this.name.setValue('Nancy');
  // }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }
}
