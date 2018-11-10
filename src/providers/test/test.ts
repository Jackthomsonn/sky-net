import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TestProvider {

  constructor(private http: HttpClient) {
  }

  public getTestResoponse = () => {
    return this.http.get('http://92fcc7a9.ngrok.io/hello')
  }
}
