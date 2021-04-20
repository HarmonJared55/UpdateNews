import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.token;

    if(token) {
      const decodedToken: any = jwt_decode(token);
      console.log(decodedToken);
      if(decodedToken.exp / 1000 < Date.now()) return true;
      else return false;
    } else {
      this.router.navigate(['./login']);
      return false;
    }
  }
  
}
