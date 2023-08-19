import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { BoucleComponent } from './boucle/boucle.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { CalculComponent } from './calcul/calcul.component';
import { FirstComponent } from './first/first.component';
import { AppRoutingModule } from './app-routing.module';
import { RoomItemComponent } from './room-item/room-item.component';
import { RoomListComponent } from './room-list/room-list.component';
import { WithParmaComponent } from './with-parma/with-parma.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { ApiExempleComponent } from './api-exemple/api-exemple.component';

@NgModule({
  declarations: [
    AppComponent,
    BoucleComponent,
    CounterComponent,
    CalculComponent,
    FirstComponent,
    RoomItemComponent,
    RoomListComponent,
    WithParmaComponent,
    RoomFormComponent,
    QuizComponent,
    QuizItemComponent,
    ApiExempleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
