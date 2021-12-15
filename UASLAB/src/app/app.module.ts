import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DevelopersComponent } from './developers/developers.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsService } from './news.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    BlogsComponent,
    DevelopersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
