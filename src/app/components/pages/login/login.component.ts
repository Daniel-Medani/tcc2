import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    email: ['', Validators.required],
    senha: ['', Validators.required],
  });

  login() {
    const { value } = this.loginForm;
    this.authService
      .login({
        email: value.email!,
        senha: value.senha!,
      })
      .subscribe({
        next: (result) => {
          this.router.navigate(['agendamentos']);
        },
      });
  }
}
