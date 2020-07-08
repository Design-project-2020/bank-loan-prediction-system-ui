import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  emailInput: string;
  passwordInput: string;
  constructor(private authService: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
  }
  loginUser() {
    // this.responseMessage = "";
    this.authService.login(this.emailInput, this.passwordInput)
      .then(res => {
        console.log(res);
        console.log("okkk")
        this.goToDashbord();
        // this.showMessage("success", "Successfully Logged In!");
        // this.displayLoginDetails = false;
        // this.isUserLoggedIn();
      }, err => {
        // 
        console.log("error",err);
      });
  }

  registerUser() {
    this.authService.register(this.emailInput, this.passwordInput)
      .then(res => {


        this.authService.sendEmailVerification().then(res => {
          console.log("okk",res);
          // this.isForgotPassword = false;
          // this.showMessage("success", "Registration Successful! Please Verify Your Email");
        }, err => {
          console.log("ohjk",err);
          // this.showMessage("danger", err.message);
        });
        // this.isUserLoggedIn();


      }, err => {
        console.log("ohjk",err);
        // this.showMessage("danger", err.message);
      });
  }

  goToDashbord(){
    this.router.navigateByUrl('/dashboard');
  }

}
