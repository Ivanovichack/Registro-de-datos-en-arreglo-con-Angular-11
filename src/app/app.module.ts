import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { PresentacionComponent } from './presentacion/presentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    PresentacionComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
