import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ResetpageComponent } from './Components/resetpage/resetpage.component';
import { RouteguardService } from './Services/RouteGurard/routeguard.service'
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { FollowersComponent } from './Components/followers/followers.component';
import { FollowingComponent } from './Components/following/following.component';
import { PicsComponent } from './Components/pics/pics.component';


const routes: Routes = [{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'forgot', component: ForgotComponent },
{ path: 'resetpage', component: ResetpageComponent },
{ path: '', redirectTo: 'login', pathMatch: "full" },
// { path: '**', redirectTo: 'login', pathMatch: "full" },
{path: 'dashboard', component: DashboardComponent  //, canActivate: [RouteguardService]
  , children: [
    { path: 'home', component: HomeComponent }
    ,{path:'',redirectTo:'home',pathMatch:"full"}
    ,{path:'followers',component:FollowersComponent}
    ,{path:'following',component:FollowingComponent}
    ,{path:'pics',component:PicsComponent}
    ,{path:'about',component:AboutComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
