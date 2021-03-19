import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CollectionComponent } from './collection/collection.component';
import { MarketComponent } from './market/market.component';
import { AppRouting } from './app.routing';
import { AuthGuardService } from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectionComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
