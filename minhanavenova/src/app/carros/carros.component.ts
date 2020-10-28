import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from '../model/Veiculo';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  veiculo = new Veiculo()
  listaVeiculos: Veiculo[]

  constructor(
    private postagemService: PostagemService,
    private router: Router
  ) { }

  ngOnInit(){
  }

  findAllVeiculos() {
    this.postagemService.getAllVeiculos().subscribe((resp: Veiculo[]) => {
      this.listaVeiculos = resp
    })
  }

  publicar() {
    if (this.veiculo.descricao == null || this.veiculo.km == null || this.veiculo.valor == null) {
      alert('Preencha todos os campos antes de publicar !')
    } else {
      this.postagemService.postPostagem(this.veiculo).subscribe((resp: Veiculo) => {
        this.veiculo = resp
        this.veiculo = new Veiculo()
        alert('Postagem realizada com sucesso!')
        this.findAllVeiculos()
        this.router.navigate(['/perfil'])
        
      })
    }

  }

}
