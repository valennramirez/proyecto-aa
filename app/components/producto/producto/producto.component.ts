import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  constructor(private productoService : ProductoService, private formBuilder : FormBuilder){}

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

    const precio : number =0; 

    if(categoria == 'bebidas')
    {

    }
    else if(categoria == 'alimentos')
    {

    }
    else if (categoria == 'golosinas')
    {

    }

    return precio; 
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
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }


}
