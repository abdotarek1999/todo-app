import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills:Array<any>=[
    {name:"HTML",prog:"25%"},
    {name:"CSS",prog:"75%"},
    {name:"JQUERY",prog:"50%"},
    {name:"JAVASCRIPT",prog:"60%"},
    {name:"BOOTSTRAP",prog:"25%"},
    {name:"MYSQL",prog:"40%"},
    {name:"PHP",prog:"70%"},
    {name:"ANGULAR",prog:"50%"},

  ]
}
