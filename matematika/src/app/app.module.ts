import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ElementaryComponent } from './elementary/elementary.component';
import { GymnasiumComponent } from './gymnasium/gymnasium.component';
import { LowerComponent } from './lower/lower.component';
import { UpperComponent } from './upper/upper.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ElementaryComponent,
    GymnasiumComponent,
    LowerComponent,
    UpperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
