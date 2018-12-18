import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ViewComponent } from './view/view.component';

const appRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    data: { title: 'main' }
  },
  {
    path: 'post',
    component: PostComponent,
    data: { title: 'Post' }
  },
  {
    path: 'edit-post',
    component: EditPostComponent,
    data: { title: 'edit-post' }
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    data: { title: 'View' }
  },
  { path: '',   redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    MainComponent,
    EditPostComponent,
    ViewComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
