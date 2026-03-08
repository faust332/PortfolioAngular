import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../../shared/components/contact/contact';
import { ProjectGridComponent } from '../../shared/components/project-grid/project-grid';

@Component({
  selector: 'app-vaisseaux-spatiaux',
  standalone: true,
  imports: [RouterLink, ContactComponent, ProjectGridComponent],
  templateUrl: './Vaisseaux-spatiaux.html',
  styleUrl: './Vaisseaux-spatiaux.css',
})
export class VaisseauxSpatiauxComponent {
  readonly base = 'images/vaisseau';
  readonly images = ['vaisseau1.png', 'vaisseau2.avif', 'vaisseau3.avif']
    .map((f) => `${this.base}/${f}`);

}
