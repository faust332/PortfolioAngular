import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../../shared/components/contact/contact';
import { ProjectGridComponent } from '../../shared/components/project-grid/project-grid';

@Component({
  selector: 'app-Linux',
  standalone: true,
  imports: [RouterLink, ContactComponent, ProjectGridComponent],
  templateUrl: './Linux.html',
  styleUrl: './Linux.css',
})
export class LinuxComponent {
  readonly base = 'images/linux';
  readonly images = [
    'linux1.png',
    'linux2.png',
    'linux3.png',
  ].map((f) => `${this.base}/${f}`);
}