import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrosComponent } from './carros/carros.component';
import { ContatoComponent } from './contato/contato.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { HomeComponent } from './home/home.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';

const routes: Routes = [

  { path: '', redirectTo:'home',pathMatch:'full'},
  { path:'home',component: HomeComponent},
  { path:'contato',component: ContatoComponent },
  { path: 'noticias',component: NoticiaComponent },
  { path: 'carros',component: CarrosComponent},
  { path: 'informacoes/:id', component: InformacoesComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'put-postagem/:id', component: PutPostagemComponent},
  { path: 'delete-postagem/:id', component: DeletePostagemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
