import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/sign/signup/signup.component';
import { SigninComponent } from './components/sign/signin/signin.component';
import { SignOutComponent } from './components/sign/sign-out/sign-out.component';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HomeTasksPageComponent } from './components/home-tasks-page/home-tasks-page.component';
import { RequestLinkComponent } from './components/request-link/request-link.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'signOut', component: SignOutComponent },
  { path: 'tasks', component: HomeTasksPageComponent },
  { path: 'tasks/:tasksID', component: TasksComponent },
  { path: 'request/:id', component: RequestLinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
