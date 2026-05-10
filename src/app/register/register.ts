import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  nom: string = '';
  email: string = '';
  password: string = '';
  erreur: string = '';
  succes: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register({ nom: this.nom, email: this.email, password: this.password }).subscribe({
      next: () => {
        this.succes = 'Inscription réussie ! Vous pouvez vous connecter.';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err: any) => {
        this.erreur = err.error?.error || 'Erreur lors de l\'inscription';
      }
    });
  }
}