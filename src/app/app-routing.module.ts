import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotComponent } from './Components/forgot/forgot.component';

const routes: Routes = [{path: 'register',component:RegisterComponent},
                        {path:'login',component:LoginComponent},
                        {path:'forgot',component:ForgotComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
