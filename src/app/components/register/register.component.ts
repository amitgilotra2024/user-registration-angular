
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { User } from '../../model/user';

@Component({
  selector: 'register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RegisterComponent],
    templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      postalCode: ['', [Validators.required, Validators.pattern('^[A-Za-z]\\d[A-Za-z][ -]?\\d[A-Za-z]\\d$')]]
    });
   }


  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log('registerForm.invalid ',this.registerForm.invalid)
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
        const url = `http://localhost:8080/users/addUser`;
        this.httpClient.post(url, user).subscribe();
      }
    }
  }

}

