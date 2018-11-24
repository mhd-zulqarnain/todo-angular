import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[
    `input.ng-invalid{border-left:5px solid red;}
    input.ng-valid{border-left:5px solid green;}`
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['mail@gmail.com', Validators.required ],
      password: ['11111111',Validators.required]
    })
  }

  ngOnInit() {
  }

}
