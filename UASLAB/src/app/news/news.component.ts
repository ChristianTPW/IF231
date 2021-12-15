import { Component, OnInit } from '@angular/core';
import {NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public nws = [] as any;
  constructor(private nwsService: NewsService) { }

  ngOnInit(): void {
    this.nws = this.nwsService.getEmployees();
  }

}
