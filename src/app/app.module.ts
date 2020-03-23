import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { NavComponent } from './components/nav/nav.component';
import { ShoppingEntityComponent } from './component/shopping/components/shopping-entity/shopping-entity.component';
import { ShoppingListComponent } from './component/shopping/components/shopping-list/shopping-list.component';
import { ComponentsComponent } from './component/shopping/components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ShoppingComponent,
    NavComponent,
    ShoppingEntityComponent,
    ShoppingListComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
