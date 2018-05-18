import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FacebookService, InitParams, LoginResponse } from 'ng2-facebook-sdk';
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  busy: Promise<any>;
  gService: Promise<any>;
  auth2: any;  
  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private service: LoginService,
    private toastr: ToastrService,
    private fb: FacebookService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])]
    })
  }

  initParams: InitParams = {
    appId: "312645405934882",
    version: 'v1.0',
    xfbml: true
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '811009371370-ej6g6d375vg7lfhrkqb2srkp5fdi5s8e.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        let userDetails = {
          profile,
          loginType: 3
        }
        this.gService = this.service.signup(userDetails).then(
          (res: any) => {
            if(res.status == 200){
              localStorage.setItem('token', res.data.token);
              this.toastr.success("Login successful");
              this._router.navigate(['/dashboard']);
            }
          }
        )
      }, (error) => {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  ngAfterViewInit(){
    this.googleInit();
    this.fb.init(this.initParams);
  }

  login() {
    var user = this.loginForm.value;
    console.log(this.loginForm.value);
    this.busy = this.service.login(user).then(
      (res: any) => {
        if(res.status == 200){
          console.log('login successful', res.status);
          // this.toastr.success("Message send successfully to your email");
          // this._router.navigate(['/']);
        }
        else{
            console.log('login failed', res.status)
            // this.toastr.error("Please enter a valid email id");
        } 
      }
    )
  }

  facebookLogin() {
    this.fb.login()
      .then((response: LoginResponse) => {
        console.log(response);
      }).catch((err) => {
        console.log('error while login')
      })
  }
}
