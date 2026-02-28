import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-Linux',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, ContactComponent],
  templateUrl: './Linux.html',
  styleUrl: './Linux.css',
})
export class LinuxComponent {
  readonly base = 'images/linux';

  readonly images = [
    'linux1.png',
    'linux2.png',
    'linux3.png',
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
