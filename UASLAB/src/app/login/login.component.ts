import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login(username: string, password: string) {
    if (username !== 'admin' && password !== 'admin') {
      throw new Error('Invalid username or password.');
    }

    localStorage.setItem('sess', Math.random().toString());
    this.router.navigate(['/blogs']);
  }
}
