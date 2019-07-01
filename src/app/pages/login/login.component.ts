import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  private login: string;
  private paswd: string;
private loginFail = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // throw new Error(''); Generated surprisingly an error
    console.log('OnInit method of login component');
  }

  public focusLogin(): void {
    this.focus = true;
    this.loginFail = false;
  }

  public focusPaswd(): void {
    this.focus1 = true;
    this.loginFail = false;
  }
  public logUserIn(): void {
    if (this.login === 'admin' && this.paswd.toLowerCase() === 'admin') {
        this.router.navigateByUrl('/admin/axe-agilite');
    } else {
      this.loginFail = true;
    }
  }

}
