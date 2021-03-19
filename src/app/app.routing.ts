import { Routes, RouterModule } from "@angular/router";
import { CollectionComponent } from "./collection/collection.component";
import { MarketComponent } from "./market/market.component";
import { NgModule } from "@angular/core";
import { AuthGuardService } from "./auth-guard.service";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/collection', pathMatch: 'full'},
    {path: 'collection/:cid', component: CollectionComponent },
    {path: 'market/:mid', component: MarketComponent
    , canActivate: [AuthGuardService]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRouting {

}