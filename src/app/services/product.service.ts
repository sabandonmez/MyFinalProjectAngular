import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44386/api/products/getall"
  constructor(private httpclient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    return this.httpclient.get<ListResponseModel<Product>>(this.apiUrl);
                    
    }
  
}
