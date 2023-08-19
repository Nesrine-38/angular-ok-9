import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { BoucleComponent } from './boucle/boucle.component';
import { CalculComponent } from './calcul/calcul.component';
import { CounterComponent } from './counter/counter.component';
import { RoomListComponent } from './room-list/room-list.component';
import { QuizComponent } from './quiz/quiz.component';
import { ApiExempleComponent } from './api-exemple/api-exemple.component';



const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'boucle', component: BoucleComponent},
  { path: 'calcul', component: CalculComponent},
  { path: 'counter', component: CounterComponent },
  {path: 'rooms', component: RoomListComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'Api', component: ApiExempleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
