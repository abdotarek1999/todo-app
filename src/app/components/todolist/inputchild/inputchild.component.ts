import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-inputchild',
  templateUrl: './inputchild.component.html',
  styleUrls: ['./inputchild.component.scss']
})
export class InputchildComponent {
@Output() sentinputvalue:EventEmitter<string>;

constructor(){
  this.sentinputvalue=new EventEmitter<string>();
}

sentvalue(target:any){
  //console.log(value);
  this.sentinputvalue.emit(target.value);
  target.value="";
}
}
