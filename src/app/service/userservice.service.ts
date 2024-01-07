import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class UserserviceService {

  user: User = new User(); // User model that holds the input data
  submitted = false; // Flag to indicate if the form is submitted
  httpClient!: HttpClient;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getUsers(){
    return this.http.get('http://localhost:8080/users/');
  }

    public addUser(user: User): Observable<User> {
      const url = `http://localhost:8080/users/addUser`;
      return this.httpClient.post(url, user) as Observable<User>;
    }

}
