import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { LoopGeneratorService } from '../loop-generator.service';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css'],
  providers: [LoopGeneratorService]
})
export class InputDataComponent implements OnInit {
  //16,8,4,2 - result 	
  step:number = 0;
  
  //Step 4 for
  arr3:number[] = new Array(24,26);

  progress:number = 0;


    //16+8+4+2+1
  assosiations:String[]=new Array<String>(31).fill("1"); 
  asLetter:String[]=['Т','Д','Б','М','Г','А','Ж','О','К','Р','В','Н'
  ,'З','П','Л','С'];

  constructor(private loopService: LoopGeneratorService) {

   }

  ngOnInit() {
  	//console.log('init');
  }

  setAssosiation(event,index){
  	this.assosiations[index]=event.target.value;
  }

  onSubmit(){
  	this.step ++; 
  	this.progress+=20;
  	//console.log(this.assosiations);
  }

  getAssosiation(index):String{
    //console.log(index+" "+this.assosiations[index]);
  	return this.assosiations[index];
  }

  getProgress():String{
  	return this.progress+"%"
  }
}
