import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  input:number=0;
  result=0;
  array=[0];
 

  check(){
    
    this.result=this.cal();//taking the result

  }
  cal()
  {
    let demo=this.input;
    let temp=0;
    let base=1; //base number
    let res:number=0;
    // calcu bin2dec and checking for number other than 0/1
    while(demo)
    {
      temp=demo%10;
      if(temp ==0 || temp ==1)
      {
        demo=Math.floor(demo/10);
        // console.log(temp) //printing last digit
        res+=temp*base;
        base=base*2;
      }
      else{

        alert("enter 0 and 1 only"); // alreting and breaking loop when number are not 0 and 1
        break;
      }
      
      
    }
    return res; // returning the result
   }
}
