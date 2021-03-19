import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

export class AuthGuardService implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     boolean | Observable<boolean> | Promise<boolean> {
         console.log('ActivatedRouteSnapshot:',route);
         console.log('RouterStateSnapshot:',state);
         
        return true;
    }

}