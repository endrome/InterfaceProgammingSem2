import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickerComponent } from './clicker/clicker.component';
import { ArrayExampleComponent } from './array-example/array-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickerComponent,
    ArrayExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
