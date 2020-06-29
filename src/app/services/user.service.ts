import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../data/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = environment.usersdataURL + "yhonny2805/users/users/"

  constructor(private http: HttpClient) { }

  getallUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.baseURL);

  }
}