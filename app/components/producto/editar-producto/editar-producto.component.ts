import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit{

  constructor(private productoService : ProductoService, private formBuilder : FormBuilder, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.initForm(); 
  }

  producto : Producto | undefined; 

  formulario : FormGroup = this.formBuilder.group({
    nombre: [''], 
    marca : [''], 
    precioCosto: [0], 
    categoria: [''], 
    id : [0]
  })

  initForm()
  {
    this.route.params.subscribe((async param =>{
      
      const id=+param['id']; 

      this.getProducto(id); 

      console.log(); 

    }))
  }

  getProducto(id : number)
  {
    this.productoService.getProducto(id).subscribe({
      next : (pr) => {
        this.formulario = this.formBuilder.group({
          nombre : [pr.nombre],
          marca : [pr.marca], 
          precioCosto : [pr.precioCosto], 
          categoria : [pr.categoria], 
          id : [pr.id]
        });
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }

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

  actualizarProducto ()
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

    console.log(producto);

    this.productoService.putProducto(producto.id, producto).subscribe({
      next : (pr) => {
        console.log('producto agregado: ' + pr); 
        window.location.replace('/listado-productos')
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }


}
