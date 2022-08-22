import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([{ path: '', component: AppComponent }]),

  ],
  declarations: [AppComponent, HelloComponent],
  providers: [RouterModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
