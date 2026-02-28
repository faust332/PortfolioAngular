import { Component, ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ContactComponent } from '../contact/contact';
import { AgrandirComponent } from '../agrandir/agrandir';

@Component({
  selector: 'app-bdd',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, ContactComponent, AgrandirComponent],
  templateUrl: './bdd.html',
  styleUrl: './bdd.css',
})
export class bddComponent {
  @ViewChild('lb') lb!: AgrandirComponent;

  readonly base = 'images/bdd';
  readonly images = ['bdd1.png','bdd2.png','bdd3.png']
  .map((f) => `${this.base}/${f}`);

  openImage(src: string) { this.lb.openImage(src); }
  onImgError(ev: Event) { console.log('Image not found:', (ev.target as HTMLImageElement).src); }
}
