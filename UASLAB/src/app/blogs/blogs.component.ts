import { Component, OnInit } from '@angular/core';
import {NewsService } from '../news.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  public nws = [] as any;
  constructor(private nwsService: NewsService) { }

  ngOnInit(): void {
    this.nws = this.nwsService.getEmployees();
  }

}
