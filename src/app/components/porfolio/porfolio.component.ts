import { Component } from '@angular/core';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss']
})
export class PorfolioComponent {
  portfolio:Array<string>=["WEB DESIGN","MOBILE DESIGN","LOGO DESIGN","WEB APPLICATION DEVELOPMENT"
                  ,"MOBILE APPLICATION DEVELOPMENT","PWA DEVELOPMENT"];
}
