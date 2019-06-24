import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  constructor() { }

  ngOnInit(): void {
    // throw new Error(''); Generated surprisingly an error
    console.log('OnInit method of login component');
  }

}
