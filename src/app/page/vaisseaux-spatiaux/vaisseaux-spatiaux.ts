import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../../components/contact/contact';
import { ProjectGridComponent } from '../../components/project-grid/project-grid';

@Component({
  selector: 'app-vaisseaux-spatiaux',
  standalone: true,
  imports: [RouterLink, ContactComponent, ProjectGridComponent],
  templateUrl: './vaisseaux-spatiaux.html',
  styleUrl: './vaisseaux-spatiaux.css',
})
export class VaisseauxSpatiauxComponent {
  readonly base = 'images/vaisseau';
  readonly images = ['vaisseau1.png', 'vaisseau2.avif', 'vaisseau3.avif']
    .map((f) => `${this.base}/${f}`);

}
