import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profle.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {TodoDetialsComponent} from './todo-detials/todo-detials.component';
import {LoginComponent} from './login/login.component'

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: TodoDetialsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login',component :LoginComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HomeComponent,
                                  ProfileComponent,
                                  PagenotfoundComponent,
                                  TodoDetialsComponent,
                                  LoginComponent];
