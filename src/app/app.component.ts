import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';

import { Observable, retry } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  films: Observable<any>;

  constructor(
    private http: HttpClient,
    private router: Router,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.films = this.http.get('https://swapi.dev/api/films');
  }

  abrirDetalheFilme(){
    
   // let urlDividida=film.url.split('/');
    //let filmeId=urlDividida[5];
    //const parametro: NavigationExtras={state:{filmeId}};
    this.router.navigate(['tela2']);
    //console.log(urlDividida);
    //console.log(filmId);
    //console.log (`/tela2/${filmId}`)
    //this.router.navigateByUrl(`/tela2/${filmId}`);
  }

  ionViewDidEnter() {}
}
