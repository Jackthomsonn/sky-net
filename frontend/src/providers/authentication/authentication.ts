import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthenticationProvider {
  constructor(private http: HttpClient) { }

  public login = (user: any) => {
    const { email, password } = user;

    return this.http.post('http://75367d8c.ngrok.io/api/login', { email, password })
  }
}
