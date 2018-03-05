import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { ILoginModel } from '../../../common/security/ILoginModel';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  login: ILoginModel;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.login = {UserName: '', Password: ''};
  }

  onSubmit(): void {
    this.authService.login(this.login.UserName, this.login.Password)
      .subscribe(n => {
        alert('Login is ' + (n ? 'successfull' : 'unsuccessfull'));
      }, e => {
        alert('Error while logging in');
      }, () => {
        console.log('request completed.');
      });
  }
}
