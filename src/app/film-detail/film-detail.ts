import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-detail.html',
  styleUrl: './film-detail.css'
})
export class FilmDetailComponent implements OnInit {

  film: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filmService: FilmService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(id!).subscribe({
      next: (data: any) => {
        this.film = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erreur :', err)
    });
  }

  retour() {
    this.router.navigate(['/']);
  }
}