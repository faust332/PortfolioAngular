import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'img-grandir',
  standalone: true,
  imports: [NgIf, AgrandirComponent],
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


