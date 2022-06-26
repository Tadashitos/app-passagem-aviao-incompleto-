import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CalculoService } from './calculo.service';

import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ CalculoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
