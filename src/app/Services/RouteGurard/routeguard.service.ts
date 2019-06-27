import { Injectable } from '@angular/core';
import { Router, CanActivate ,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RouteguardService  implements CanActivate {

  constructor(
    private router: Router,){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean
  {
    if(!localStorage.getItem('Token')){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
