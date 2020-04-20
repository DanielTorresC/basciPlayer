import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  genre = [
    {
      name: 'Rock',
      img: 'assets/img/rock.png'
    },
    {
      name: 'Salsa',
      img: 'assets/img/salsa.png'
    },
    {
      name: 'Reggae',
      img: 'assets/img/reggae.png'
    },
    {
      name: 'EDM',
      img: 'assets/img/edm.png'
    }
  ]

  constructor(
    private router:Router
  ) {}

  openArtista(item){
    this.router.navigate(['/artista',item])
  }

}
