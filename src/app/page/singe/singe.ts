import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../../components/contact/contact';
import { ProjectGridComponent } from '../../components/project-grid/project-grid';

@Component({
  selector: 'app-Singe',
  standalone: true,
  imports: [RouterLink, ContactComponent, ProjectGridComponent],
  templateUrl: './singe.html',
  styleUrl: './singe.css',
})
export class SingeComponent {
  readonly base = 'images/singe';
  readonly images = ['singe1.png','singe2.png','singe3.png']
    .map((f) => `${this.base}/${f}`);
}
