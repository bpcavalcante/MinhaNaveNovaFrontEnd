import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User = new User();
  senha: string;

  usuarioLogin: UsuarioLogin = new UsuarioLogin();

  constructor(
    private authService: AuthService,
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(){
  }

  conferirSenha(event: any){
    this.senha = event.target.value
  }

  cadastrar(){
    if(this.senha === this.user.senha ){
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/home']) // Duvida como fechar o modal
        alert('Usuário cadastrado com sucesso !')
      })
    }else{
      alert("Suas senhas não conferem")
    }   
  }

  entrar(){
    this.authService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin ) => {
      this.usuarioLogin = resp 
      localStorage.setItem('token', this.usuarioLogin.token)
      this.router.navigate(['/perfil'])
      
    })                                           
  }

  sair(){
    this.router.navigate(['/home'])
    localStorage.clear()
  }


}
