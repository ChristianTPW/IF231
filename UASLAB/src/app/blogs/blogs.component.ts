import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const sessExists = localStorage.getItem('sess');
    if (!sessExists) {
      this.router.navigate(['/login']);
      return;
    }

    // render blogs
  }

  logout() {
    localStorage.removeItem('sess');
    this.router.navigate(['/login']);
  }
}
