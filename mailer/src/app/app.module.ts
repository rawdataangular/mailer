import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MailComposeComponent } from './mailcompose/mailcompose.component';
import { Routes, RouterModule } from '@angular/router';
import {MailComposeModule } from '../app/mailcompose/mailcompose.module'



const appRoutes: Routes = [
  { path: "", redirectTo: "/mailcompose", pathMatch: "full" },

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MailComposeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule {}