import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Itask } from 'src/app/viewmodels/itask';

@Component({
  selector: 'app-outputchild',
  templateUrl: './outputchild.component.html',
  styleUrls: ['./outputchild.component.scss']
})
export class OutputchildComponent{
  @Input()  result?:Array<Itask>;
  @Output() sentindex:EventEmitter<number>;
  clickd:boolean=false;

  constructor(){
    this.sentindex=new EventEmitter<number>();
  }

  removedindex(index:number){
    //console.log(index);
    this.sentindex.emit(index);
  }

  changestatus(selecteditem:Itask){
    selecteditem.finished=!selecteditem.finished;
  }
}
