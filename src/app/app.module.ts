import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { FibonacciPipe } from './pipes/fibonacci.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FibonacciPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
