import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProgressComponent } from './components/progress/progress.component';
import { CardComponent } from './components/card/card.component';
import { ParentappComponent } from './components/todolist/parentapp/parentapp.component';
import { InputchildComponent } from './components/todolist/inputchild/inputchild.component';
import { OutputchildComponent } from './components/todolist/outputchild/outputchild.component';
import { FormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    SkillsComponent,
    PorfolioComponent,
    FooterComponent,
    ProgressComponent,
    CardComponent,
    ParentappComponent,
    InputchildComponent,
    OutputchildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
