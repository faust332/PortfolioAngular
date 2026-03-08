import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ContactComponent } from '../contact/contact';
import { AgrandirComponent } from '../agrandir/agrandir';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [RouterLink, NgFor, ContactComponent, AgrandirComponent],
  templateUrl: './formation.html',
  styleUrl: './formation.css',
})
export class FormationComponent {
  @ViewChild('lb') lb!: AgrandirComponent;
  readonly base = 'images/formation';

  readonly images = [
    'formation1.png',
    'formation2.jpg',
    'formation3.png',
  ].map((f) => `${this.base}/${f}`);
  
  openImage(src: string) { this.lb.openImage(src); }
  onImgError(ev: Event) { console.log('Image not found:', (ev.target as HTMLImageElement).src); }
}
