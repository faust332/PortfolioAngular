import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ContactComponent } from '../contact/contact';
import { AgrandirComponent } from '../agrandir/agrandir';


@Component({
  selector: 'app-vaisseaux-spatiaux',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, ContactComponent, AgrandirComponent],
  templateUrl: './Vaisseaux-spatiaux.html',
  styleUrl: './Vaisseaux-spatiaux.css',
})
export class VaisseauxSpatiauxComponent {
  readonly base = 'images/vaisseau';

  readonly images = ['vaisseau1.png', 'vaisseau2.avif', 'vaisseau3.avif']
    .map((f) => `${this.base}/${f}`);

  lightboxOpen = false;
  lightboxImage: string | null = null;

  openImage(src: string) {
    this.lightboxImage = src;
    this.lightboxOpen = true;
  }

  closeImage() {
    this.lightboxOpen = false;
    this.lightboxImage = null;
  }

  onImgError(ev: Event) {
    const img = ev.target as HTMLImageElement;
    console.log('Image not found:', img.src);
  }
}
