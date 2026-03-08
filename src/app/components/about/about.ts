import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../../shared/components/contact/contact';
import { ProjectGridComponent } from '../../shared/components/project-grid/project-grid';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, ContactComponent, ProjectGridComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  readonly base = `images/combats`;
  readonly images = [
    'combats1.png', 'combats2.png', 'combats3.png',
    'combats4.png', 'combats5.png', 'combats6.png',
  ].map((f) => `${this.base}/${f}`);
}