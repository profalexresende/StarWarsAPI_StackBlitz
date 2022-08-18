import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tela2Component } from '../tela2/tela2.page';
import { Tela2RoutingModule } from '../tela2/tela2-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tela2RoutingModule,
  ],
  declarations: [Tela2Component]
  //bootstrap: [Tela2Component],
})
export class Tela2Module {}