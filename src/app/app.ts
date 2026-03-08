import {
  Component,
  DestroyRef,
  ViewEncapsulation,
  inject,
  signal,
  ViewChild
} from '@angular/core';
import { NgIf } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContactComponent } from './shared/components/contact/contact';
import { AgrandirComponent } from './shared/components/agrandir/agrandir';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf, ContactComponent, AgrandirComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  @ViewChild('lb') lb!: AgrandirComponent;
  // Affichage page principale vs pages routées
  isMain = signal(true);
  
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

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
  openImage(src: string) { this.lb.openImage(src); }
}
