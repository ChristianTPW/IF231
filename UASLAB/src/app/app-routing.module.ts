import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DevelopersComponent } from './developers/developers.component';

const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'developers', component: DevelopersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }