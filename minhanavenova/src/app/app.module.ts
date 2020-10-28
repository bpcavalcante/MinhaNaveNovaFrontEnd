import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BarrafiltroComponent } from './barrafiltro/barrafiltro.component';
import { CarrosComponent } from './carros/carros.component';
import { ContatoComponent } from './contato/contato.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarrafiltroComponent,
    CarrosComponent,
    ContatoComponent,
    DeletePostagemComponent,
    FooterComponent,
    HomeComponent,
    InformacoesComponent,
    NavbarComponent,
    NoticiaComponent,
    PerfilComponent,
    PutPostagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
