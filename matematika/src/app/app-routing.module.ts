import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementaryComponent } from './elementary/elementary.component';
import { GymnasiumComponent } from './gymnasium/gymnasium.component';
import { LowerComponent } from './lower/lower.component';
import { UpperComponent } from './upper/upper.component';

const routes: Routes = [
  {path: "elementary", component: ElementaryComponent},
  {path: "gymnasium", component: GymnasiumComponent},
  {path: "elementary/lower", component: LowerComponent},
  {path: "elementary/upper", component: UpperComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
