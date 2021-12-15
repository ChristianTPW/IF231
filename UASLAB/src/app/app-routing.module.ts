import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DevelopersComponent } from './developers/developers.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
