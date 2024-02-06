import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-visualizar-productos',
  templateUrl: './visualizar-productos.component.html',
  styleUrls: ['./visualizar-productos.component.css']
})
export class VisualizarProductosComponent implements OnInit{

  ngOnInit(): void { 
    this.getProductos();  
    console.log(this.productos); 
  }

  constructor(private productoService : ProductoService, private route : ActivatedRoute){}

  productos : Producto[] =[]; 

  getProductos()
  {
    this.productoService.getProductos().subscribe(
      {
        next : (li) =>{
          this.productos= li; 
        }, 
        error : (err) =>{
          console.log(err); 
        }
      }
    )
  }

  eliminarProducto(id : number)
  {
    this.productoService.deleteProducto(id).subscribe( //agregar una confirmacion !!!!!!!
      {
        next : (pr) => {
          console.log('Producto eliminado con exito'); 
          window.location.reload(); 
        }, 
        error : (err) => {
          console.log(err); 
        }
      }
    )
  }

 
}
