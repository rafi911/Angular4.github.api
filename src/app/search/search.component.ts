import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']

})
export class SearchComponent implements OnInit {

  public searchText;
  public searchResult;
  public searchCount;
  constructor(private router: Router, public gs: GithubService) {

  }

  ngOnInit() {

  }

  ShowUserDetail(user) {
    this.router.navigate(['user', user.login]);
  }
  getUsers() {
    this.gs.getuser(this.searchText).subscribe(
      res => {
        this.searchResult = res;
        console.log(this.searchResult);
        this.searchCount = res.total_count;
      }
    );
  }


}
