import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ComponentImportsModule} from './component-imports.module';
import { LoginComponent } from './Components/login/login.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {ResetpageComponent} from './Components/resetpage/resetpage.component';
import { SinglepicComponent } from './Components/singlepic/singlepic.component';
import {HomeComponent} from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { FollowersComponent } from './Components/followers/followers.component';
import { FollowingComponent } from './Components/following/following.component';
import { PicsComponent } from './Components/pics/pics.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    DashboardComponent,
    ResetpageComponent,
    SinglepicComponent,
    HomeComponent,
    AboutComponent,
    FollowersComponent,
    FollowingComponent,
    PicsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentImportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
