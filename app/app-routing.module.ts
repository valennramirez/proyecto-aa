import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProductoComponent } from './components/producto/editar-producto/editar-producto.component';
import { GuardarProductoComponent } from './components/producto/guardar-producto/guardar-producto.component';
import { VisualizarProductosComponent } from './components/producto/visualizar-productos/visualizar-productos.component';
import { BuscadorComponent } from './shared/buscador/buscador.component';
import { EditarProductoPageComponent } from './pages/editar-producto-page/editar-producto-page.component';
import { AgregarProductoPageComponent } from './pages/agregar-producto-page/agregar-producto-page.component';
import { BuscadorProductoPageComponent } from './pages/buscador-producto-page/buscador-producto-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';

const routes: Routes = [
  {path:'actualizar-producto/:id', component: EditarProductoPageComponent}, 
  {path: 'nuevo-producto', component: AgregarProductoPageComponent}, 
  {path: 'inicio/todos', component: InicioPageComponent}, 
  {path: 'buscar/:op', component: BuscadorProductoPageComponent}, 


  {path: '**', redirectTo: 'inicio/todos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
