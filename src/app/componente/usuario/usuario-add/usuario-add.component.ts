import { UsuarioService } from './../../../service/usuario.service';
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'; //pega o parametro na hora de editar

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

   usuario = new User();
 
   constructor(private routeActive: ActivatedRoute, private userService: UsuarioService) { }

  ngOnInit(): void {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if(id != null){
       
        this.userService.getProduto(id).subscribe(data => {
        this.usuario = data;
        });

    }
  }

  salvarProduto(){
    this.userService.salvarProduto(this.usuario).subscribe(data => {
    this.novo();
    console.info("Produto Gravado: " + data);
    });
}

atualizarProduto(id: number){
  this.userService.updateProduto(id, this.usuario).subscribe(data =>{
   this.novo();
   console.info("Produto atualizado: " + data);
  });

}

novo(){
  this.usuario = new User();
}



}
