import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GithubService} from '../github/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user;
  constructor(private gs: GithubService, private activatedrouter: ActivatedRoute) { }

  ngOnInit() {
    const userId = this.activatedrouter.snapshot.params['userId'];
    this.gs.getUserDetail(userId).subscribe(
      res => {
        this.user = res;
        console.log(this.user);
      }
    );
    //console.log(userId);
  }

}
