import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos, Productos1 } from '../models/productosModels';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url: string = environment.apiUrl;
  constructor(private https:HttpClient) { }

  // listProducts() {
  //   return this.https.get(this.url + 'Inventario/Productos');
  // }

   // Method to retrieve a list of employees
   listProducts(): Observable<Productos[]> {
    // Sends a GET request to the specified URL and returns an Observable of Users array
    return this.https.get<Productos[]>(this.url + 'Inventory/ProductsList');
  }

  listProductosCategorias():Observable<any[]> {
    return this.https.get<any>(this.url + 'Inventario/CategoriasProductos');
  }

  listColoresProductos():Observable<any[]> {
    return this.https.get<any>(this.url + 'Inventario/ColoresProductos');
  }

  listTallasProductos():Observable<any[]> {
    return this.https.get<any>(this.url + 'Inventario/TallaProductos');
  }

  addProductos(productos:Productos1):Observable<Productos1> {
    return this.https.post<Productos1>(this.url +'Inventario/SaveProductos',productos);
  }
  updateProductos( productos:Productos1):Observable<Productos1> {
    return this.https.post<Productos1>(this.url +'Inventario/UpdateProdcutos',productos);
  }
}
