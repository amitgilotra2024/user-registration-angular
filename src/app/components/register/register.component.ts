
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
<<<<<<< HEAD
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../model/user';
import { SharedModule } from '../../shared.module';
=======
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { User } from '../../model/user';
>>>>>>> c315bd76ccba7bd6a48f6cb8512d6a5fb8175435

@Component({
  selector: 'register',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RegisterComponent, SharedModule],
  templateUrl: './register.component.html',
=======
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RegisterComponent],
    templateUrl: './register.component.html',
>>>>>>> c315bd76ccba7bd6a48f6cb8512d6a5fb8175435
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  user!: User;
  defaultLanguage = 'en';

  constructor(
    private formBuilder: FormBuilder,
<<<<<<< HEAD
    private httpClient: HttpClient,
    private translateService: TranslateService
  ) {
    translateService.setDefaultLang(this.defaultLanguage);
=======
    private httpClient: HttpClient
  ) {
>>>>>>> c315bd76ccba7bd6a48f6cb8512d6a5fb8175435
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      postalCode: ['', [Validators.required, Validators.pattern('^[A-Za-z]\\d[A-Za-z][ -]?\\d[A-Za-z]\\d$')]]
    });
   }


  ngOnInit(): void {

  }

<<<<<<< HEAD

  ngOnInit(): void { }

  onSubmit(): void {
    console.log('registerForm.invalid ', this.registerForm.invalid)
=======
  onSubmit(): void {
    console.log('registerForm.invalid ',this.registerForm.invalid)
>>>>>>> c315bd76ccba7bd6a48f6cb8512d6a5fb8175435
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const user = new User();
    const hasValues = this.registerForm.value.firstName && this.registerForm.value.lastName && this.registerForm.value.email && this.registerForm.value.postalCode;

    if (hasValues) {
      user.firstName = this.registerForm.value.firstName;
      user.lastName = this.registerForm.value.lastName;
      user.email = this.registerForm.value.email;
      user.postalCode = this.registerForm.value.postalCode;
      if (this.registerForm.valid) {
<<<<<<< HEAD
        this.registerForm.reset();
=======
>>>>>>> c315bd76ccba7bd6a48f6cb8512d6a5fb8175435
        const url = `http://localhost:8080/users/addUser`;
        this.httpClient.post(url, user).subscribe();
      }
    }
  }

<<<<<<< HEAD
  changeLanguage(): void {
    this.defaultLanguage = this.defaultLanguage === 'en' ? 'fr' : 'en'
    this.translateService.setDefaultLang(this.defaultLanguage);
  }

=======
>>>>>>> c315bd76ccba7bd6a48f6cb8512d6a5fb8175435
}

