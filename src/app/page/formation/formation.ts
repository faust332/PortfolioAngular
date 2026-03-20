import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../../components/contact/contact';
import { ProjectGridComponent } from '../../components/project-grid/project-grid';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [RouterLink, ContactComponent, ProjectGridComponent],
  templateUrl: './formation.html',
  styleUrl: './formation.css',
})
export class FormationComponent {
  readonly base = 'images/formation';

  readonly images = [
    'formation1.png',
    'formation2.jpg',
    'formation3.png',
  ].map((f) => `${this.base}/${f}`);
  
}
