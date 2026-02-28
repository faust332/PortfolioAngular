import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ContactComponent } from '../contact/contact';
import { AgrandirComponent } from '../agrandir/agrandir';

@Component({
  selector: 'app-Linux',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, ContactComponent, AgrandirComponent],
  templateUrl: './Linux.html',
  styleUrl: './Linux.css',
})
export class LinuxComponent {
  @ViewChild('lb') lb!: AgrandirComponent;
  readonly base = 'images/linux';

  readonly images = [
    'linux1.png',
    'linux2.png',
    'linux3.png',
  ].map((f) => `${this.base}/${f}`);

  openImage(src: string) { this.lb.openImage(src); }
  onImgError(ev: Event) { console.log('Image not found:', (ev.target as HTMLImageElement).src); }
}
