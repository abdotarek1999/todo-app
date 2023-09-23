import { Component } from '@angular/core';
import { Itask } from 'src/app/viewmodels/itask';

@Component({
  selector: 'app-parentapp',
  templateUrl: './parentapp.component.html',
  styleUrls: ['./parentapp.component.scss']
})
export class ParentappComponent {
  list:Array<Itask>=[];
  objectinserted?:Itask;


  recievedvalue(value:string){
    //console.log(value);
    this.objectinserted={
      "name":value,
      "finished":false
    };
    this.list.push(this.objectinserted);
  }

  recievedindex(i:number){
    //console.log(i);
    this.list.splice(i,1);
    console.log(this.list);
  }



}

