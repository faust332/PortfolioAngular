import {
  Component,
  DestroyRef,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  // Lightbox: l'image sélectionnée (null => fermé)
  selectedImage = signal<string | null>(null);

  // Affichage page principale vs pages routées
  isMain = signal(true);

  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  constructor() {
    const setMain = (url: string) => {
      this.isMain.set(url === '/' || url === '');
    };

    setMain(this.router.url);

    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((e) => setMain(e.urlAfterRedirects));
  }

  // Pour le template (car tu appelles isMain())
  isMainPage() {
    return this.isMain();
  }

  openImage(src: string) {
    this.selectedImage.set(src);
  }

  closeImage() {
    this.selectedImage.set(null);
  }
}
