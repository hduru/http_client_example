import { Component, inject, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../infrastructure/base-form.component';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginDto } from './models/loginDto.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ButtonModule, DividerModule, InputTextModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent extends BaseFormComponent implements OnInit {

  _authService: AuthService;
  _router: Router;

  loading: boolean = false;


  constructor() {
    super();

    this._authService = inject(AuthService);
    this._router = inject(Router);

    this.formControlTemplate = [
      {
        key: 'kullaniciAdi',
        label: 'Username',
        required: true
      },
      {
        key: 'sifre',
        label: 'Password',
        required: true
      }
    ]
    
  }

  ngOnInit(): void {
    this.setForm()
  }

  onSubmit(item:LoginDto) {
    if(this.formGroup.valid) {
      this.loading = true;

      this._authService.login(item).subscribe(response => {
        this.loading = false; 
        if(response && response.satatus) {
          this._authService.setJWT(response.data);
          this._router.navigate(['/todos/list']);
        }
      })

    } else {
      console.log("Form is not valid!")
    }

  }

}
