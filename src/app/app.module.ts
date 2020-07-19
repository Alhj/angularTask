import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StoreModule } from '@ngrx/store';

import { signinReducer } from './reducers/signIn.reducer';
import { messageReducer } from './reducers/message.reducer'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SignupComponent } from './components/sign/signup/signup.component';
import { SigninComponent } from './components/sign/signin/signin.component';
import { ContianerComponent } from './components/layout/contianer/contianer.component';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { HomeTasksPageComponent } from './components/home-tasks-page/home-tasks-page.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTaskComponent } from './components/overley/add-task/add-task.component';
import { AddCollectionComponent } from './components/overley/add-collection/add-collection.component';
import { SignOutComponent } from './components/sign/sign-out/sign-out.component';
import { DelateSureComponent } from './components/overley/delate-sure/delate-sure.component';
import { EditTaskComponent } from './components/overley/edit-task/edit-task.component';
import { LinksComponent } from './components/home-tasks-page/links/links.component';
import { AddUserCollectionComponent } from './components/overley/add-user-collection/add-user-collection.component';
import { RequestUserComponent } from './components/overley/request-user/request-user.component';
import { CollectionWrongUserComponent } from './components/overley/collection-wrong-user/collection-wrong-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    ContianerComponent,
    HomeComponent,
    TasksComponent,
    TaskComponent,
    HomeTasksPageComponent,
    LoadingScreenComponent,
    AddTaskComponent,
    AddCollectionComponent,
    SignOutComponent,
    DelateSureComponent,
    EditTaskComponent,
    LinksComponent,
    AddUserCollectionComponent,
    RequestUserComponent,
    CollectionWrongUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({signIn: signinReducer, message: messageReducer}),
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
