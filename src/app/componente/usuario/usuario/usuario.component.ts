import { User } from './../../../model/user';
import { UsuarioService } from './../../../service/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

   produtos: Array<User>;
   nome: string;
  
   constructor(private usuarioService: UsuarioService) { 

  }

  ngOnInit(): void {
     this.usuarioService.getProdutoList().subscribe(data => {
     this.produtos = data;
     });
  }

  deleteUsuario(id: number){
    this.usuarioService.deletarProduto(id).subscribe(data => {
      console.log("Retorno do método delete : " + data);
      this.usuarioService.getProdutoList().subscribe(data => {
      this.produtos = data;
      });
    });
  }

  consultarProduto(){
    this.usuarioService.consultarProduto(this.nome).subscribe( data =>{
         this.produtos = data;
    });
}

}
