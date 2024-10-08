import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }
  apiUrl = 'https://localhost:7086/api/';

  getBrands():Observable<ListResponseModel<Brand>> 
  {
    let path = this.apiUrl + "Brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(path);
  }
}
