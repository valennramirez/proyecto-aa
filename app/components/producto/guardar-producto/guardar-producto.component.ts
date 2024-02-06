import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-guardar-producto',
  templateUrl: './guardar-producto.component.html',
  styleUrls: ['./guardar-producto.component.css']
})
export class GuardarProductoComponent {
  
  constructor(private productoService : ProductoService, private formBuilder : FormBuilder, private router: Router){}

  producto : Producto | undefined; 

  formulario : FormGroup = this.formBuilder.group({
    nombre : [''],
    marca : [''], 
    precioCosto : [0], 
    id : [0], 
    categoria : ['']
  }); 

  setPrecio(costo : number)
  {
    const categoria : string = this.formulario.controls['categoria'].value;

    let precio : number =0; 

    if(categoria == 'lacteos')
    {
      precio= costo * 1.40; 
    }
    else 
    {
      precio = costo * 1.35; 
    }


    return Math.round(precio); 
  }

  guardarProducto ()
  {
    const costo : number =this.formulario.controls['precioCosto'].value;  


    const producto : Producto = {
      nombre: this.formulario.controls['nombre'].value, 
      marca: this.formulario.controls['marca'].value, 
      precioCosto : costo, 
      precioPublico: this.setPrecio(costo), 
      id: this.formulario.controls['id'].value,
      categoria: this.formulario.controls['categoria'].value
    }


    this.productoService.postProducto(producto).subscribe({
      next : (pr) => {
        console.log('producto agregado: ' + pr); 
        this.router.navigate(['listado-productos']);
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }


}

