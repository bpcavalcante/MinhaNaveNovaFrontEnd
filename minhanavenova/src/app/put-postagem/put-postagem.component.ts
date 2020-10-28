import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../model/Veiculo';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-put-postagem',
  templateUrl: './put-postagem.component.html',
  styleUrls: ['./put-postagem.component.css']
})
export class PutPostagemComponent implements OnInit {

  veiculo: Veiculo = new Veiculo()
  idVeiculo: number

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.idVeiculo = this.route.snapshot.params["id"]
    this.findByIdVeiculo(this.idVeiculo)
  }

  findByIdVeiculo(id: number){
    this.postagemService.getByIdVeiculo(id).subscribe((resp: Veiculo) => {
  this.veiculo = resp
  })
  }

  salvar(){
    
    this.postagemService.putPostagem(this.veiculo).subscribe((resp: Veiculo) => {
    this.veiculo = resp
    this.router.navigate(['/perfil'])
    alert('Postagem alterada com sucesso')
    }, err => {
      if (err.status == '500'){
      alert('Preencha todos os campos corretamente antes de enviar !')
    }
    })
    }

}
