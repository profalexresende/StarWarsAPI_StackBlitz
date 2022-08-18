import { HttpClient } from '@angular/common/http';
import { Component, VERSION, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { retry, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  films: Observable<any>;


  constructor(private router: Router, private http: HttpClient,public toastController: ToastController) { }
 
  ngOnInit() {
    this.films = this.http.get('https://swapi.dev/api/films');
  }

  abrirDetalheFilme(film){
    
    let urlDividida=film.url.split('/');
    let filmeId=urlDividida[5];
    const parametro: NavigationExtras={state:{filmeId}};
    this.router.navigate(['tela2'],parametro);
    //console.log(urlDividida);
    //console.log(filmId);
    //console.log (`/tela2/${filmId}`)
    //this.router.navigateByUrl(`/tela2/${filmId}`);
  }

  ionViewDidEnter() {}
}
