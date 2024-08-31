import { AppConstants } from './../app-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { 

  }

  getProdutoList(): Observable<any>{
      
      return this.http.get<any>(AppConstants.baseURL);
  }

  getProduto(id: any): Observable<any>{
    
       return this.http.get<any>(AppConstants.baseURL + id);
}

 consultarProduto(nome: string) : Observable<any>{
      
      return this.http.get(AppConstants.baseURL + "produtoPorNome/" + nome);

}

salvarProduto(user: any) : Observable<any>{
    
      return this.http.post<any>(AppConstants.baseURL, user);
}

updateProduto(id: number, user: any) : Observable<any>{
     
     return this.http.put<any>(AppConstants.baseURL + id, user);
}

deletarProduto(id: number): Observable<any>{
  
     return this.http.delete(AppConstants.baseURL + id, {responseType : 'text'});
  }

 }
