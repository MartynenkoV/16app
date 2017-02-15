import { Injectable } from '@angular/core';

@Injectable()
export class LoopGeneratorService {

  constructor() { }



  getArray(n:number,jstart?:number,jstep?:number):any[]{

  	if(jstep){
  	var arr = new Array<number>(n);	
  		for(let i=0,j=jstart;i<n;i++,j+=jstep){
  		arr[i] = j;
     // console.log(arr[i]);
  	}
  	return arr;
  	}
  	//console.log(jstart);
  	else{
      //console.log("AAAAAAAAAAA");
  	return new Array(n);
   }
  }



}
