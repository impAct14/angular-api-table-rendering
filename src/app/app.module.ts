import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { ProductionComponent } from './components/production/production.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ProductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
