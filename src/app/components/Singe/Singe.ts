import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ContactComponent } from '../contact/contact';
import { AgrandirComponent } from '../agrandir/agrandir';

@Component({
  selector: 'app-Singe',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, ContactComponent, AgrandirComponent],
  templateUrl: './Singe.html',
  styleUrl: './Singe.css',
})
export class SingeComponent {
  readonly base = 'images/singe';

  readonly images = [
    'singe1.png',
    'singe2.png',
    'singe3.png',
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
