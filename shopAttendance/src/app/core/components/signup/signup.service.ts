import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private registerUrl: string = 'http://localhost:8080/register';

  constructor(private http: HttpClient) { }

  public register(data:any){
    return this.http.post(this.registerUrl,data)
  }

}
