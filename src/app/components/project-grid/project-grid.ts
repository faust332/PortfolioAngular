import { Component, Input, ViewChild } from '@angular/core';
import { AgrandirComponent } from '../agrandir/agrandir';

@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [ AgrandirComponent],
  templateUrl: './project-grid.html',
  styleUrl: './project-grid.css'
})
export class ProjectGridComponent {
  @Input() images: string[] = [];
  @ViewChild('lb') lb!: AgrandirComponent;

  openImage(src: string): void { 
    this.lb.openImage(src); 
  }

  onImgError(ev: Event): void { 
    console.log('Image not found:', (ev.target as HTMLImageElement).src); 
  }
}
