import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.page.html',
  styleUrls: ['./artista.page.scss'],
})
export class ArtistaPage implements OnInit {

  title='';
  artist: any

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }
  
  

  ngOnInit() {

    this.title = this.actRoute.snapshot.paramMap.get("name");

    switch (this.title) {
      case 'Rock':
        this.artist =[
          {
            name: 'Red Hot Chili Peppers',
            img: 'assets/img/rhcp.png'
          },{
            name: 'Incubus',
            img: 'assets/img/incubus.jpg'
          },{
            name: 'Coheed and Cambria',
            img: 'assets/img/cac.jpg'
          },{
            name: 'The Offsprings',
            img: 'assets/img/offsprings.jpg'
          },{
            name: 'Papa Roach',
            img: 'assets/img/papa.jpg'
          },{
            name: 'Queen',
            img: 'assets/img/queen.jpg'
          }
        ]
        break;
      
      case 'Salsa':
        this.artist =[
          {
            name: 'El Gran Combo de Puerto Rico',
            img: 'assets/img/gran_combo.jpg'
          },{
            name: 'Rubén Blades',
            img: 'assets/img/riben_blades.jpg'
          },{
            name: 'Hector Lavoe',
            img: 'assets/img/hector_lavoe.jpg'
          },{
            name: 'Marc Anthony',
            img: 'assets/img/marc_anthony.jpg'
          },{
            name: 'Herencia de Timbiquí',
            img: 'assets/img/herencia.jpg'
          },{
            name: 'Grupo Niche',
            img: 'assets/img/grupo_niche.jpg'
          }
        ]

        break;

      case 'EDM':
        this.artist =[
          {
            name: 'Skrillex',
            img: 'assets/img/skrillex.jpg'
          },{
            name: 'Daft Punk',
            img: 'assets/img/daft_punk.jpg'
          },{
            name: 'David Guetta',
            img: 'assets/img/david_guetta.jpg'
          },{
            name: 'Calvin Harris',
            img: 'assets/img/calvin_harris.jpg'
          },{
            name: 'Tiësto',
            img: 'assets/img/tiesto.jpg'
          },{
            name: 'Steve Aoki',
            img: 'assets/img/steve_aoki.jpeg'
          }
        ]
        break;

      case 'Reggae':
        this.artist =[
          {
            name: 'Bob Marley',
            img: 'assets/img/bob_marley.jpeg'
          },{
            name: 'UB40',
            img: 'assets/img/ub40.jpeg'
          },{
            name: 'Cultura Profética',
            img: 'assets/img/cultura_profetica.jpg'
          },{
            name: 'Dread Mar I',
            img: 'assets/img/dread.jpg'
          },{
            name: 'Damian Marley',
            img: 'assets/img/damian_marley.jpg'
          },{
            name: 'Los Cafres',
            img: 'assets/img/cafres.jpeg'
          }
        ]
        break;        
    
      default:
        break;
    }

  }

  openInfo(item,img){
    this.router.navigate(['/info',item,img]);
  }

}
