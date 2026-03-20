import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  standalone: true,
  template: '',
})
class EmptyRouteComponent { }

export const routes: Routes = [
  { path: '', component: EmptyRouteComponent },

  {
    path: 'projets/jeu-combats',
    loadComponent: () =>
      import('./page/about/about').then((m) => m.AboutComponent),
  },

  {
    path: 'projets/Linux',
    loadComponent: () =>
      import('./page/linux/linux').then((m) => m.LinuxComponent),
  },

  {
    path: 'projets/Singe',
    loadComponent: () =>
      import('./page/singe/singe').then((m) => m.SingeComponent),
  },

  {
    path: 'projets/Vaisseaux-spatiaux',
    loadComponent: () =>
      import('./page/vaisseaux-spatiaux/Vaisseaux-spatiaux')
        .then((m) => m.VaisseauxSpatiauxComponent),
  },

  {
    path: 'projets/bdd',
    loadComponent: () =>
      import('./page/bdd/bdd')
        .then((m) => m.BddComponent),
  },

  {
    path: 'projets/formation',
    loadComponent: () =>
      import('./page/formation/formation')
        .then((m) => m.FormationComponent),
  },


  { path: '**', redirectTo: '' },
];
