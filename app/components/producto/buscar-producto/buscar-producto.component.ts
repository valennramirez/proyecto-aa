import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  ngOnInit(): void { 
    this.getParam(); 
    console.log(this.productos)
  }

  constructor(private productoService : ProductoService, private route : ActivatedRoute){}

  productos : Producto[] =[]; 
  op : string = ''; 

  getParam ()
  {
    this.route.params.subscribe(param =>{
      this.op= param['op']; 

      console.log(this.op); 

      this.productos.splice(0, this.productos.length); 
      this.buscarProducto(this.op); 
    })

  }

  ///vaciar array, el reload, buscar la manera en que aparezcan todos los productos primero y despues los que se buscan  


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

  buscarCategoria(categoria : string)
  {

    this.productoService.getProductos().subscribe({
      next : (pros) => {
        pros.forEach((pr) => {

          if(pr.categoria.includes(categoria))
          {
            this.productos.push(pr); 
            console.log(pr);
          }
        })
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }

  buscarMarca(marca : string)
  {
    this.productoService.getProductos().subscribe({
      next : (pros) => {
        pros.forEach((pr) => {

          if(pr.marca.includes(marca))
          {
            this.productos.push(pr); 
          }

        })
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }

  buscarProducto (ingreso : string)
  {
    console.log(ingreso); 
    this.productoService.getProductos().subscribe({
      next : (pros) => { 
        pros.forEach((pr) => {

          if(pr.nombre.includes(ingreso))
          {
            this.productos.push(pr); 
          }
        })
        console.log(this.productos)
      }, 
      error : (err) => {
        console.log(err); 
      }
    })

    

  }
  buscarPorId(id : number)
  {
    this.productoService.getProducto(id).subscribe({
      next : (pr) => {
        this.productos.push(pr); 
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }

}
