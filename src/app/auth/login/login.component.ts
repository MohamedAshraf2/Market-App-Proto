import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onLogin(form: User) {
    this.authService.login(form).subscribe(
      (res) => {
        sessionStorage.setItem('token', res.token)
        console.log(res)
      }
    )
  }
}
