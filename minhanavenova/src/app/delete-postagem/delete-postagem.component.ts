import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../model/Veiculo';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-delete-postagem',
  templateUrl: './delete-postagem.component.html',
  styleUrls: ['./delete-postagem.component.css']
})
export class DeletePostagemComponent implements OnInit {

  veiculo: Veiculo = new Veiculo()

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    let id: number = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdVeiculo(id).subscribe((resp: Veiculo) => {
      this.veiculo = resp
    })
  }

  btnSim() {
    this.postagemService.deletePostagem(this.veiculo.id).subscribe(() => {   
      this.router.navigate(['/perfil'])
      alert('Postagem apagada com sucesso !')
    })
  }

  btnNao(){
    this.router.navigate(['/perfil'])
   }

}
