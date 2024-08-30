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
  
   constructor(private usuarioService: UsuarioService) { 

  }

  ngOnInit(): void {
     this.usuarioService.getProdutoList().subscribe(data => {
     this.produtos = data;
     });
  }

}
