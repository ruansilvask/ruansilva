import { ProjetosComponent } from './projetos/projetos.component';
import { ConhecimentoComponent } from './conhecimento/conhecimento.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { ContatosComponent } from './contatos/contatos.component';


const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'sobre', component: SobreComponent
  },
  {
    path: 'conhecimentos', component: ConhecimentoComponent
  },
  {
    path: 'projetos', component: ProjetosComponent
  },
  {
    path: 'contatos', component: ContatosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
