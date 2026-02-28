import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, ContactComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  readonly base = 'images/combats';

  readonly images = [
    'combats1.png',
    'combats2.png',
    'combats3.png',
    'combats4.png',
    'combats5.png',
    'combats6.png',
  ].map((f) => `${this.base}/${f}`);

  lightboxOpen = false;
  lightboxImage: string | null = null;

  openImage(src: string) {
  //console.log('OPEN', src);
  this.lightboxImage = src;
  this.lightboxOpen = true; 
  }

  closeImage() {
    this.lightboxOpen = false;
    this.lightboxImage = null;
  }

  // Debug
  onImgError(ev: Event) {
    const img = ev.target as HTMLImageElement;
    console.log('Image not found:', img.src);
  }
}
