import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  getUserDetail(userId): Observable<any> {
    const url = 'https://api.github.com/users/' + userId;
  return  this.http.get(url).map(
      res => {
       const user = res.json();
       return user;
      }
    );
  }
  getuser(searchText): Observable<any> {
    let data;
    const url = 'http://api.github.com/search/users?q=' + searchText;
    return this.http.get(url).map(
      res => {
      data = res.json();
      return data;
    }).catch(err => Observable.throw(err));

  }
}
