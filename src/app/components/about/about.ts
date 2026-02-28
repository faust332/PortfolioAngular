import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ContactComponent } from '../contact/contact';
import { AgrandirComponent } from '../agrandir/agrandir';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, ContactComponent, AgrandirComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  @ViewChild('lb') lb!: AgrandirComponent;
  readonly base = 'images/combats';

  readonly images = [
    'combats1.png',
    'combats2.png',
    'combats3.png',
    'combats4.png',
    'combats5.png',
    'combats6.png',
  ].map((f) => `${this.base}/${f}`);
  
  openImage(src: string) { this.lb.openImage(src); }
  onImgError(ev: Event) { console.log('Image not found:', (ev.target as HTMLImageElement).src); }
}
