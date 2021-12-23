import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, ObservedValueOf } from 'rxjs';
import { Godown,  Products, SubCategory } from '../DataClass/data';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  //private ip="192.168.1.2"
  private ip="localhost";
  private productApi="http://"+this.ip+":9090/";

  constructor(private http: HttpClient) { }

  getProductList(){
   return this.http.get<Products[]>(this.productApi+'console/Allproducts');
  }
  public getSuperCategory() {
    return this.http.get<Godown[]>(this.productApi+`api/super_category`);
  } 
  getSubCategory(sCategory: string){
    return this.http.get<SubCategory[]>(this.productApi+`api/category/`+sCategory);
  }
  getProductId(){
    return this.http.get<string>(this.productApi+'console/pid');
  }
  getSugessionList(key:string){
    return this.http.get(this.productApi+'console/keyword/'+key)
  }
  saveProduct(Product:any):Observable<any>{
    return this.http.post(this.productApi+'console/AddProduct', Product,{responseType: 'text'});
  }
  UpdateProduct(Product:any, key:any):Observable<any>{
    return this.http.post(this.productApi+'console/EditProduct/'+key+'/',Product,{responseType: 'text'});
  }
}
