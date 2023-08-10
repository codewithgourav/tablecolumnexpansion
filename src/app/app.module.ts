import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragtablecolumnComponent } from './dragtablecolumn/dragtablecolumn.component';
import {MatTableModule} from '@angular/material/table';
import { DraggabledirectiveDirective } from './draggabledirective.directive'
@NgModule({
  declarations: [
    AppComponent,
    DragtablecolumnComponent,
    DraggabledirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
