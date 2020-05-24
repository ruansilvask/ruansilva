import { ContatosModule } from './contatos/contatos.module';
import { ProjetosModule } from './projetos/projetos.module';
import { ConhecimentoModule } from './conhecimento/conhecimento.module';
import { SobreModule } from './sobre/sobre.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ConhecimentoModule,
    ProjetosModule,
    ContatosModule,
    SobreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
