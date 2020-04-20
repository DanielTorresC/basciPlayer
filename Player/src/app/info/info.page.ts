import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Howl } from 'howler';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  title='';
  img:any;
  description: any;
  review='';
  constructor(
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title = this.actRoute.snapshot.paramMap.get('id');
    this.img = this.actRoute.snapshot.paramMap.get('image');

    switch (this.title) {
      case 'Red Hot Chili Peppers':
        this.review='Red Hot Chili Peppers es una banda de funk rock estadounidense formada en 1983 en Los Ángeles, California. Sus integrantes son, el vocalista Anthony Kiedis, el guitarrista John Frusciante, el bajista Flea y el baterista Chad Smith. El estilo musical de la banda fusiona el funk tradicional con el rock y el rock alternativo incluyendo elementos de otros géneros como el rap, pop rock, heavy metal, dance, punk, hip hop e indie rock.',

        this.description=[
          {
            name:'Give It Away',
            album:'assets/img/bssm.jpg',
            song:'assets/audio/give-it-away.mp3',
          },{
            name:'Wet Sand',
            album:'assets/img/stadium-arcadium.jpg',
            song:'assets/audio/wet-sand.mp3'
          },{
            name:'Goodbye Angels',
            album:'assets/img/the-getaway.jpg',
            song:'assets/audio/goodbye-angels.mp3'
          }
        ];
        break;
    
      default:
        break;
    }
  }

  activeTrack =null;
  player: Howl =null;
  isPlaying = false;
  progress = 0;
  @ViewChild('range', {static: false}) range: IonRange;

  start(items){

    if(this.player){
      this.player.stop();
    }

    this.player =new Howl({
      src: [items.song],
      html5 : true,
      onplay: ()=>{
        this.isPlaying = true;
        this.activeTrack = items;
        this.updateProgress();
      },
      onend: ()=> {
      }
    });
    this.player.play()
  }

  togglePlayer(pause){
    this.isPlaying = !pause;
    if(pause){
      this.player.pause();
    }else{
      this.player.play();
    }
  }

  next(){
    let index = this.description.indexOf(this.activeTrack);
    if(index != this.description.length - 1){
      this.start(this.description[index + 1]);
    } else {
      this.start(this.description[0]);
    }
  }

  prev(){
    let index = this.description.indexOf(this.activeTrack);
    if(index > 0){
      this.start(this.description[index-1]);
    } else {
      this.start(this.description[this.description.length - 1]);
    }
  }

  seek(){
    let newValue = +this.range.value;
    let duration = this.player.duration;
    this.player.seek(duration *(newValue / 100));
  }

  updateProgress(){
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgress();
    }, 1000)
  }

  
}
