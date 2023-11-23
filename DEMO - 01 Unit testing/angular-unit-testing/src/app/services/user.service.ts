import { API_URL } from '../interfaces/constants';
import { User, UsersResult } from './../interfaces/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<UsersResult> {
    const req = this.httpClient.get<UsersResult>(API_URL);
    return req
  }
}
