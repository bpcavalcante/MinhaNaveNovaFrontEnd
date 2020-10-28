import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../model/Veiculo';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllVeiculos(){
    return this.http.get('http://localhost:8080/veiculo', this.token)
  }
  
  getByIdVeiculo(id: number){
    return this.http.get(`http://localhost:8080/veiculo/${id}`, this.token)
  }
  
  postPostagem(veiculo: Veiculo){
    return this.http.post('http://localhost:8080/veiculo', veiculo,this.token)
  }
  
  putPostagem(veiculo: Veiculo){
    return this.http.put('http://localhost:8080/veiculo', veiculo, this.token)
  }
  
  deletePostagem(id: number){
    return this.http.delete(`http://localhost:8080/veiculo/${id}`, this.token)
  }
  

}
