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
  @ViewChild('lb') lb!: AgrandirComponent;

  readonly base = 'images/vaisseau';
  readonly images = ['vaisseau1.png', 'vaisseau2.avif', 'vaisseau3.avif']
    .map((f) => `${this.base}/${f}`);

  openImage(src: string) { this.lb.openImage(src); }
  onImgError(ev: Event) { console.log('Image not found:', (ev.target as HTMLImageElement).src); }
}
