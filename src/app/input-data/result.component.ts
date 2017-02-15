import { Component, OnInit, Input} from '@angular/core';
import { Injectable } from '@angular/core';
import { LoopGeneratorService } from '../loop-generator.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [LoopGeneratorService]
})
export class ResultComponent implements OnInit {
  	

  constructor(private loopService: LoopGeneratorService) { 

  }
  @Input() result:String[];
  ngOnInit() {
  }
  getAssociation(index):String{
  	return this.result[index];
  }
}
