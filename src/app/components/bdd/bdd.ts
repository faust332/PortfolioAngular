import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../../shared/components/contact/contact';
import { ProjectGridComponent } from '../../shared/components/project-grid/project-grid';

@Component({
  selector: 'app-bdd',
  standalone: true,
  imports: [RouterLink, ContactComponent, ProjectGridComponent],
  templateUrl: './bdd.html',
  styleUrl: './bdd.css',
})
export class BddComponent {
  readonly base = 'images/bdd';
  readonly images = ['bdd1.png','bdd2.png','bdd3.png']
  .map((f) => `${this.base}/${f}`);

}
