import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  

  isWord:boolean = false;
  constructor() { }
  standartMode = true;
  ngOnInit() {
  }

}
