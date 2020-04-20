import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'artista/:name',
    loadChildren: () => import('./artista/artista.module').then( m => m.ArtistaPageModule)
  },
  {
    path: 'info/:id/:image',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'song',
    loadChildren: () => import('./song/song.module').then( m => m.SongPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
