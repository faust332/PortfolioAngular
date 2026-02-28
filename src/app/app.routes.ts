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
      import('./components/about/about').then((m) => m.AboutComponent),
  },

  {
    path: 'projets/Linux',
    loadComponent: () =>
      import('./components/Linux/Linux').then((m) => m.LinuxComponent),
  },

  // ✅ page dédiée au projet "Singe"
  {
    path: 'projets/Singe',
    loadComponent: () =>
      import('./components/Singe/Singe').then((m) => m.SingeComponent),
  },

  // ✅ page dédiée au projet "Vaisseaux spatiaux"
  {
    path: 'projets/Vaisseaux-spatiaux',
    loadComponent: () =>
      import('./components/Vaisseaux-spatiaux/Vaisseaux-spatiaux')
        .then((m) => m.VaisseauxSpatiauxComponent),
  },

  // ✅ page dédiée au projet "bdd"
  {
    path: 'projets/bdd',
    loadComponent: () =>
      import('./components/bdd/bdd')
        .then((m) => m.bddComponent),
  },

  // ✅ page dédiée au projet "formation"
  {
    path: 'projets/formation',
    loadComponent: () =>
      import('./components/formation/formation')
        .then((m) => m.formationComponent),
  },


  { path: '**', redirectTo: '' },
];
