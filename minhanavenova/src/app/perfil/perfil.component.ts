import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../model/Veiculo';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  veiculo: Veiculo = new Veiculo()
  listaVeiculos: Veiculo[]

  constructor(
    private postagemService: PostagemService
  ) { }

  ngOnInit(){
    this.findAllVeiculos()
  }

  findAllVeiculos(){
    this.postagemService.getAllVeiculos().subscribe((resp: Veiculo[]) => {
      this.listaVeiculos = resp
    })
  }

}
