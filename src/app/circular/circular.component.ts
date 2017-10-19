import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {
  public happyText = 'Manager is on vacation';
  public TodoList= [
    'Wash coffee mug',
    'Take a shower',
    'Go to tution centre',
    'Write notes'
  ];
  constructor() { }

  ngOnInit() {
    this.happyText = 'Manager is sick';
  }
  MakeHappier(){
    this.happyText = 'Manager got fired';
  }
}
