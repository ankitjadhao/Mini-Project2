import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string): void{
    localStorage.setItem('token', token);
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }

  login({ user, password }: any): Observable<any> {
    if (user === 'ankit' && password === 'ankit@123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Ankit Jadhao', email: 'ankit@gmail.com' });
    }
    return throwError(new Error('Wrong username and password'));
  }
}
