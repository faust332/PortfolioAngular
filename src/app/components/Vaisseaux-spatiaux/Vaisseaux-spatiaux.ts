import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ContactComponent } from '../contact/contact';
import { AgrandirComponent } from '../agrandir/agrandir';

@Component({
  selector: 'app-vaisseaux-spatiaux',
  standalone: true,
  imports: [RouterLink, NgFor, ContactComponent, AgrandirComponent],
  templateUrl: './Vaisseaux-spatiaux.html',
  styleUrl: './Vaisseaux-spatiaux.css',
})
export class VaisseauxSpatiauxComponent {
  @ViewChild('lb') lb!: AgrandirComponent;

  readonly base = 'images/vaisseau';
  readonly images = ['vaisseau1.png', 'vaisseau2.avif', 'vaisseau3.avif']
    .map((f) => `${this.base}/${f}`);

  openImage(src: string) { this.lb.openImage(src); }
  onImgError(ev: Event) { console.log('Image not found:', (ev.target as HTMLImageElement).src); }
}
