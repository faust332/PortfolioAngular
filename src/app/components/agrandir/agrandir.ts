import { Component } from '@angular/core';

@Component({
  selector: 'img-grandir',
  standalone: true,
  templateUrl: './agrandir.html',
  styleUrl: './agrandir.css',
})
export class AgrandirComponent {
  lightboxOpen = false;
  lightboxImage = '';

  openImage(src: string) {
    this.lightboxImage = src;
    this.lightboxOpen = true;
  }

  closeImage() {
    this.lightboxOpen = false;
    this.lightboxImage = '';
  }
}


