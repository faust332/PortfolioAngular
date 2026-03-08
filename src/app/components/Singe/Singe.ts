import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../../shared/components/contact/contact';
import { ProjectGridComponent } from '../../shared/components/project-grid/project-grid';

@Component({
  selector: 'app-Singe',
  standalone: true,
  imports: [RouterLink, ContactComponent, ProjectGridComponent],
  templateUrl: './Singe.html',
  styleUrl: './Singe.css',
})
export class SingeComponent {
  readonly base = 'images/singe';
  readonly images = ['singe1.png','singe2.png','singe3.png']
    .map((f) => `${this.base}/${f}`);
}
