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
      
      case 'Incubus':
        this.review = 'Incubus es una banda de rock alternativo estadounidense formado por el vocalista Brandon Boyd, guitarrista Mike Einziger y batería José Pasillas cuando estudiaban juntos y después expandienron con la inclusión del bajista Alex "Dirk Lance" Katunich,y Gavin "DJ Lyfe" Koppell; ambos reemplazados finalmente por Ben Kenney y DJ Kilmore respectivamente. Para el 2001 tuvieron un enorme éxito con el sencillo "Drive", seguido de su álbum Morning View. '
        
        this.description=[
          {
            name:'Drive',
            album:'assets/img/make-yourself.jpg',
            song:'assets/audio/drive.mp3',
          },{
            name:'Love Hurts',
            album:'assets/img/light-grenades.jpg',
            song:'assets/audio/love-hurts.mp3'
          },{
            name:'Megalomaniac',
            album:'assets/img/monuments-of-melodies.jpg',
            song:'assets/audio/megalomaniac.mp3'
          }
        ];
        break;

      case 'Coheed and Cambria':
        this.review = 'Coheed and Cambria es una banda de rock progresivo estadounidense formada en Nyack, Nueva York, en 1995. La banda se integra por Claudio Sánchez (vocalista principal, guitarra rítmica, teclados), Travis Stever (guitarra principal, segundo vocal), Josh Eppard (batería, teclados), y Zach Cooper (bajo) La música de la banda incorpora elementos del rock progresivo, pop, heavy metal, y post-hardcore. ';

        this.description=[
          {
            name:'Welcome Home',
            album:'assets/img/good-apolo.jpg',
            song:'assets/audio/welcome-home.mp3',
          },{
            name:'Dark Side Of Me',
            album:'assets/img/ascension.jpg',
            song:'assets/audio/dark-side-of-me.mp3'
          },{
            name:'The Hard Sell',
            album:'assets/img/afterman.jpg',
            song:'assets/audio/the-hard-sell.mp3'
          }
        ];
        break;

      case 'The Offsprings':
        this.review = 'The Offspring es una banda de punk rock estadounidense, formada en Huntington Beach, California, en 1984 bajo el nombre de Manic Subsidal. Actualmente está integrada por Dexter Holland, Noodles, Todd Morse y Pete Parada.'

        this.description=[
          {
            name:'All I Want',
            album:'assets/img/ixnay.jpg',
            song:'assets/audio/all-i-want.mp3',
          },{
            name:'The Kids Aren\'t Alright',
            album:'assets/img/americana.jpg',
            song:'assets/audio/the-kids.mp3'
          },{
            name:'You\'re Gonna Go Far, Kid',
            album:'assets/img/rise-and-fall.jpg',
            song:'assets/audio/go-far.mp3'
          }
        ];
        break;

      case 'Papa Roach':
        this.review = 'Papa Roach es una banda estadounidense de rock fundada en 1993 en Vacaville, California. Se dio a conocer. En sus primeros años, la banda era descrita como nu metal y rap metal. Con el tiempo, la agrupación añadió otros sonidos a su música, tales como el hard rock, el metal y el rock alternativo.'

        this.description=[
          {
            name:'Last Resort',
            album:'assets/img/ready-to-rumble.jpg',
            song:'assets/audio/last-resort.mp3',
          },{
            name:'Blood Brothers',
            album:'assets/img/infest.jpg',
            song:'assets/audio/blood-brothers.mp3'
          },{
            name:'Getting Away With Murder',
            album:'assets/img/murder.jpg',
            song:'assets/audio/murder.mp3'
          }
        ];
        break;

      case 'Queen':

      this.review = 'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún se considera activa.'

      this.description=[
        {
          name:'Bohemian Rhapsody',
          album:'assets/img/opera.jpg',
          song:'assets/audio/bohemian-rhapsody.mp3',
        },{
          name:'We Will Rock You',
          album:'assets/img/world.jpg',
          song:'assets/audio/rock-you.mp3'
        },{
          name:'I Want To Break Free',
          album:'assets/img/the-works.jpg',
          song:'assets/audio/free.mp3'
        }
      ];
        break;

      case 'El Gran Combo de Puerto Rico':

      this.review = 'El Gran Combo de Puerto Rico es una agrupación de salsa de Puerto Rico, una de las más reconocidas de América Latina. Dado que muchos cantantes han sido miembros en algún momento de la orquesta, el periodista colombiano Ley Martin le asignó el apodo La Universidad de la Salsa.'

      this.description=[
        {
          name:'Y No Hago Mas Na\'',
          album:'assets/img/universidad.jpg',
          song:'assets/audio/hago.mp3',
        },{
          name:'Me Liberé',
          album:'assets/img/milenio.jpg',
          song:'assets/audio/me-libere.mp3'
        },{
          name:'Un Verano En Nueva York',
          album:'assets/img/7.jpg',
          song:'assets/audio/verano.mp3'
        }
      ];
        break;

      case 'Rubén Blades':

      this.review = 'Rubén Blades Bellido de Luna (Ciudad de Panamá; 16 de julio de 1948), más conocido como Rubén Blades, es un cantante, compositor, músico, actor, abogado, político y activista panameño. Ha desarrollado gran parte de su carrera artística en la ciudad de Nueva York. Sus discos más exitosos los realizó junto a Willie Colón para el sello discográfico Fania durante el boom de la salsa. Su estilo ha sido calificado como \"salsa intelectual\" y en muchos países se le conoce como el «poeta de la salsa. Sus canciones han alcanzado gran popularidad y es considerado uno de los cantautores más exitosos y prolíficos de Latinoamérica. '

      this.description=[
        {
          name:'Plástico',
          album:'assets/img/hits.jpg',
          song:'assets/audio/plastico.mp3',
        },{
          name:'Pedro Navaja',
          album:'assets/img/siembra.jpg',
          song:'assets/audio/pedro-navaja.mp3'
        },{
          name:'Decisiones',
          album:'assets/img/buscando-america.jpg',
          song:'assets/audio/decisiones.mp3'
        }
      ];
        break;
        //faltan canciones
      case 'Hector Lavoe':

      this.review = 'Héctor Juan Pérez Martínez, conocido como Héctor Lavoe (Machuelo Abajo, Ponce, 30 de septiembre de 1946-Queens, Nueva York, 29 de junio de 1993), fue un cantante, compositor y productor musical de salsa puertorriqueño. Es ampliamente considerado como el más importante cantante e intérprete en la historia de la Salsa (género musical) ya que ayudó a establecer la popularidad de dicho género musical en las décadas 1960, 1970 y 1980.'

      this.description=[
        {
          name:'Periódico de Ayer',
          album:'assets/img/depende.jpg',
          song:'assets/audio/periodico-de-ayer.mp3',
        },{
          name:'Juanito Alimaña',
          album:'assets/img/vigilante.jpg',
          song:'assets/audio/juanito-alimaña.mp3'
        },{
          name:'El Cantante',
          album:'assets/img/comedia.jpg',
          song:'assets/audio/el-cantante.mp3'
        }
      ];
        break;

      case 'Marc Anthony':

      this.review = 'Marco Antonio Muñiz, conocido como Marc Anthony (Nueva York, 16 de septiembre de 1968), es un cantante y actor puertorriqueño-estadounidense, cuyos temas van desde la salsa, pasando por el bolero, la balada y el pop. Empezó su carrera discográfica en el género hip hop con el dúo Little Louie & Marc Anthony llegando al n.º 1 de las listas estadounidenses en 1991. Ralph Mercado lo fichó para su sello RMM en esa fecha y lo lanzó cantando salsa, consiguiendo un gran éxito que duró años, desde su primer sencillo con la canción "Hasta que te conocí" de Juan Gabriel que fue nº1 en ventas. '

      this.description=[
        {
          name:'Vivir mi Vida',
          album:'assets/img/vivir-mi-vida.jpg',
          song:'assets/audio/vivir-mi-vida.mp3',
        },{
          name:'Flor Pálida',
          album:'assets/img/3.0.jpg',
          song:'assets/audio/flor-palida.mp3'
        },{
          name:'Ahora Quién',
          album:'assets/img/amar-sin-mentiras.jpg',
          song:'assets/audio/ahora-quien.mp3'
        }
      ];
        break;

      case 'Herencia de Timbiquí':

      this.review = 'Herencia de Timbiquí es una formación de 11 músicos colombianos, oriundos de la región de Timbiquí, Cauca, Colombia que fusiona el sonido de la marimba de Chonta, los cununos y el bombo folclórico, junto al resto de una orquesta y cantantes. '

      this.description=[
        {
          name:'Sabrás',
          album:'assets/img/this-is-gozar.jpg',
          song:'assets/audio/sabras.mp3',
        },{
          name:'Te Invito',
          album:'assets/img/tambo.jpg',
          song:'assets/audio/te-invito.mp3'
        },{
          name:'Vive a Tu Manera',
          album:'assets/img/a-tu-manera.jpg',
          song:'assets/audio/vive-a-tu-manera.mp3'
        }
      ];
      break;

      case 'Grupo Niche':

      this.review = 'El Grupo Niche es un grupo de salsa fundado en 1979 en Bogotá, Colombia, por Jairo Varela y Alexis Lozano. ​En el año 1983 la agrupación se radicó en Cali. Varela fue director del grupo hasta su muerte en 2012, así como su productor, compositor y vocalista. Alexis Lozano, quien tocaba el trombón y era arreglista, dejó la agrupación para formar la Orquesta Guayacán. El Grupo Niche es considerado una de las agrupaciones salseras más importantes de América. '

      this.description=[
        {
          name:'Sin Sentimientos',
          album:'assets/img/sin-sentimientos.jpg',
          song:'assets/audio/sin-sentimientos.mp3',
        },{
          name:'Cali Pachanguero',
          album:'assets/img/cali-pachanguero.jpg',
          song:'assets/audio/cali-pachanguero.mp3'
        },{
          name:'Busca Por Dentro',
          album:'assets/img/cielo-de-tambores.jpg',
          song:'assets/audio/busca-por-dentro.mp3'
        }
      ];
      break;

      case 'Skrillex':

      this.review = 'Sonny John Moore (Los Ángeles, California, 15 de enero de 1988),1 más conocido por su nombre artístico Skrillex, es un DJ, productor musical, músico y cantante estadounidense de EDM y exvocalista y guitarrista de su primera banda atRisk entre 2001 a 2003 y actual vocalista de la banda de post-hardcore y metalcore From First to Last.3​ '

      this.description=[
        {
          name:'Bangarang',
          album:'assets/img/bangarang.jpg',
          song:'assets/audio/bangarang.mp3',
        },{
          name:'Make It Bun Dem',
          album:'assets/img/make-it-bun-dem.jpg',
          song:'assets/audio/make-it-bun-dem.mp3'
        },{
          name:'First Of The Year',
          album:'assets/img/scary-monsters.jpg',
          song:'assets/audio/first-of-the-year.mp3'
        }
      ];
      break;

      case 'Daft Punk':

      this.review = 'Daft Punk es un dúo musical formado por los músicos franceses Guy-Manuel de Homem-Christo (n. 1974) y Thomas Bangalter (n. 1975). Daft Punk alcanzó una gran popularidad en el estilo house a mediados de la década de los años 1990 en Francia y continuó con su éxito los años siguientes, usando el estilo synthpop. El dúo también es acreditado por la producción de canciones que se consideran esenciales en el estilo french house. '

      this.description=[
        {
          name:'One More Time',
          album:'assets/img/alive-2007.jpg',
          song:'assets/audio/one-more-time.mp3',
        },{
          name:'Veridis Quo',
          album:'assets/img/discovery.jpg',
          song:'assets/audio/veridis-quo.mp3'
        },{
          name:'Instant Crush',
          album:'assets/img/ram.jpg',
          song:'assets/audio/instant-crush.mp3'
        }
      ];
      break;

      case 'David Guetta':

      this.review = 'Pierre David Guetta (París, 7 de noviembre de 1967), más conocido como David Guetta, es un disc-jockey de EDM y productor discográfico francés de ascendencia marroquí, sefardí y belga. Actualmente ocupa el lugar #3 según la encuesta realizada por DJ Mag. '

      this.description=[
        {
          name:'Titanium',
          album:'assets/img/titanium.jpg',
          song:'assets/audio/titanium.mp3',
        },{
          name:'Mad Love',
          album:'assets/img/mad-love.jpg',
          song:'assets/audio/mad-love.mp3'
        },{
          name:'Memories',
          album:'assets/img/one-love.jpg',
          song:'assets/audio/memories.mp3'
        }
      ];
      break;

      case 'Calvin Harris':

      this.review = 'Adam Richard Wiles (Dumfries, Escocia; 17 de enero de 1984), más conocido como Calvin Harris, es un DJ, productor, cantante, compositor escocés especializado en música electrónica. Actualmente ocupa el puesto #19 en la encuesta anual de la revista DJmag. '

      this.description=[
        {
          name:'Summer',
          album:'assets/img/summer.png',
          song:'assets/audio/summer.mp3',
        },{
          name:'Feels',
          album:'assets/img/feels.jpg',
          song:'assets/audio/feels.mp3'
        },{
          name:'Promises',
          album:'assets/img/promises.jpg',
          song:'assets/audio/promises.mp3'
        }
      ];
      break;

      case 'Tiësto':

      this.review = 'Tijs Michiel Verwest (Breda, Países Bajos; 17 de enero de 1969) es un DJ y productor neerlandés. A pesar de que ha utilizado muchos alias en el pasado, es más conocido por su trabajo como DJ Tiësto o simplemente como Tiësto, un alias que proviene de su sobrenombre de la infancia.'

      this.description=[
        {
          name:'Adagio For Strings',
          album:'assets/img/just-be.jpg',
          song:'assets/audio/adagio-for-strings.mp3',
        },{
          name:'Secrets',
          album:'assets/img/a-town-called-paradise.jpg',
          song:'assets/audio/secrets.mp3'
        },{
          name:'Ritual',
          album:'assets/img/ritual.jpg',
          song:'assets/audio/ritual.mp3'
        }
      ];
      break;

      case 'Steve Aoki':

      this.review = 'Steven Hiroyuki Aoki (Miami, 30 de noviembre de 1977) más conocido como Steve Aoki, es un DJ y productor estadounidense de EDM y fundador del sello discográfico Dim Mak Records. Actualmente, ocupa el puesto #10, según el ranking de la revista DJ Mag '

      this.description=[
        {
          name:'No Beef',
          album:'assets/img/no-beef.jpg',
          song:'assets/audio/no-beef.mp3',
        },{
          name:'A Light That Never Comes',
          album:'assets/img/a-light.jpg',
          song:'assets/audio/a-light.mp3'
        },{
          name:'Boneless',
          album:'assets/img/boneless.jpg',
          song:'assets/audio/boneless.mp3'
        }
      ];
      break;

      case 'Bob Marley':

      this.review = 'Robert Nesta Marley, más conocido como Bob Marley (Nine Mile, Saint Ann, Jamaica, 6 de febrero de 1945-Miami, Florida, Estados Unidos, 11 de mayo de 1981), fue un músico, guitarrista y compositor jamaicano. Durante su carrera musical fue el líder, compositor y guitarrista de las bandas The Wailers (1964-1974) y Bob Marley & The Wailers (1974-1980). '

      this.description=[
        {
          name:'Jammin',
          album:'assets/img/jamming.jpg',
          song:'assets/audio/jammin.mp3',
        },{
          name:'No Women No Cry',
          album:'assets/img/rastaman.jpg',
          song:'assets/audio/no-cry.mp3'
        },{
          name:'Is This Love',
          album:'assets/img/kaya.jpg',
          song:'assets/audio/is-this-love.mp3'
        }
      ];
      break;

      case 'UB40':

      this.review = 'UB40 es un grupo inglés de música pop reggae y dub formado en Birmingham, Inglaterra, en 1978. Grupo multirracial que destacó por su compromiso social y político en sus primeros tiempos. La formación (cuyo nombre fue tomado de un formulario oficial para el subsidio de desempleo) tuvo su origen en la ciudad de Birmingham, donde residían los hermanos Alastair Campbell (1959) y Robin Campbell (1954). Ambos procedían de una familia con tradición musical (sus padres eran cantantes de folk). El grupo se formó hacia 1978, con Jim Brown (1957) Earl Falconer (1959) y Brian Travers (1959).'

      this.description=[
        {
          name:'Red Red Wine',
          album:'assets/img/lol.jpg',
          song:'assets/audio/red-red-wine.mp3',
        },{
          name:'Imposible Love',
          album:'assets/img/impossible-love.jpg',
          song:'assets/audio/impossible-love.mp3'
        },{
          name:'Kingston Town',
          album:'assets/img/ghits.jpg',
          song:'assets/audio/kingston-town.mp3'
        }
      ];
      break;

      case 'Cultura Profética':

      this.review = 'Cultura Profética es una banda de reggae originaria de Puerto Rico que hizo su debut en 1996. Son reconocidos por su particular estilo con toques de roots reggae, así como por sus tributos a Bob Marley.'

      this.description=[
        {
          name:'Ilegal',
          album:'assets/img/ilegal.jpg',
          song:'assets/audio/ilegal.mp3',
        },{
          name:'La Complicidad',
          album:'assets/img/la-complicidad.jpg',
          song:'assets/audio/la-complicidad.mp3'
        },{
          name:'Saca Prende Y Sorprende',
          album:'assets/img/saca-prende-sorprende.jpg',
          song:'assets/audio/saca-prende-sorprende.mp3'
        }
      ];
      break;

      case 'Dread Mar I':

      this.review = 'Mariano Javier Castro (Lanús, 31 de enero de 1978),​ conocido artísticamente como Dread Mar-I, es un cantante argentino de reggae en español. Comenzó su carrera solista bajo el nombre Dread Mar-I en 2005 después de varios años como vocalista de Mensajeros Reggae. En abril de ese año editó su primer disco, Jah guía. La canción «Inspiración», que formó parte del mismo, fue la cortina musical del programa de ESPN Gravedad Zero.'

      this.description=[
        {
          name:'Tú Sin Mi',
          album:'assets/img/vivi-en-do.jpg',
          song:'assets/audio/tu-sin-mi.mp3',
        },{
          name:'Hoja En Blanco',
          album:'assets/img/10-anos.jpg',
          song:'assets/audio/hoja-en-blanco.mp3'
        },{
          name:'Sálvame',
          album:'assets/img/amor-es.jpg',
          song:'assets/audio/salvame.mp3'
        }
      ];
      break;

      case 'Damian Marley':

      this.review = 'Damian Robert Nesta «Jr. Gong» Marley (Kingston, Jamaica, 21 de julio de 1978) es un músico jamaicano, ganador de tres premios Grammy, y artista de roots reggae y dancehall. Es uno de los hijos menores de Bob Marley y el único hijo que tuvo con Cindy Breakspeare, Miss Mundo de 1976. Su apodo es Junior Gong, derivación del de su padre, Tuff Gong.'

      this.description=[
        {
          name:'Road To Zion',
          album:'assets/img/welcome-to-jamrock.jpg',
          song:'assets/audio/road-to-zion.mp3',
        },{
          name:'Medication',
          album:'assets/img/stony-hill.jpg',
          song:'assets/audio/medication.mp3'
        },{
          name:'Patience',
          album:'assets/img/distant-relatives.jpg',
          song:'assets/audio/patience.mp3'
        }
      ];
      break;

      case 'Los Cafres':

      this.review = 'Los Cafres es una banda argentina de reggae, formada a fines de 1987. El grupo logró reconocimiento popular a mediados de la década de los \'90, con la edición de su primer disco, Frecuencia Cafre. El término «cafre» proviene del adjetivo árabe "kafir" (en árabe, كافر kāfir, en plural كفّار kuffār), que en primera instancia significa "infiel" y que luego fue variando su significado hacia "brutal en el más alto grado"; acepción del término con el que la banda elige identificarse. '

      this.description=[
        {
          name:'Tus Ojos',
          album:'assets/img/suena-la-alarma.jpg',
          song:'assets/audio/tus-ojos.mp3',
        },{
          name:'Casi q\' Me Pierdo',
          album:'assets/img/paso-gigante.jpg',
          song:'assets/audio/casi-q-me-pierdo.mp3'
        },{
          name:'Sigo Caminando',
          album:'assets/img/alas-canciones.jpg',
          song:'assets/audio/sigo-caminando.mp3'
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

  stop(){
    if(this.player){
      this.player.stop();
    }
  }

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