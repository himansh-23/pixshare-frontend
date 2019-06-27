import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ResetpageComponent } from './Components/resetpage/resetpage.component';
import {RouteguardService} from './Services/RouteGurard/routeguard.service'
const routes: Routes = [{path: 'register',component:RegisterComponent},
                        {path:'login',component:LoginComponent},
                        {path:'forgot',component:ForgotComponent},
                        {path:'dashboard',component:DashboardComponent, canActivate: [RouteguardService]},
                        {path:'resetpage',component:ResetpageComponent},
                        {path:'', redirectTo:'login',pathMatch:"full"},
                        {path:'**' ,redirectTo:'login',pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
