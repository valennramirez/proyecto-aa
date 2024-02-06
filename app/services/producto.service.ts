import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http : HttpClient) { }

  private url : string = 'http://localhost:4500/productos'; 

  postProducto (producto : Producto) : Observable<Producto>
  {
    return this.http.post<Producto>(this.url, producto, {headers : {'Content-type' : 'application/json'}} ); 
  }

  putProducto(id : number, producto : Producto) : Observable<Producto>
  {
    return this.http.put<Producto>(`${this.url}/${id}`, producto, {headers : {'Content-type' : 'application/json'}}); 
  }

  getProductos () : Observable <Producto[]>
  {
    return this.http.get<Producto[]>(this.url); 
  }

  getProducto( id : number ) : Observable<Producto>
  {
    return this.http.get<Producto>(`${this.url}/${id}`); 
  }

  deleteProducto (id : number ) : Observable<Producto>
  {
    return this.http.delete<Producto>(`${this.url}/${id}`); 
  }


}
