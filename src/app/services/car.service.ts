import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = 'https://localhost:7086/api/';

  getCars():Observable<ListResponseModel<Car>>
  {
    let path = this.apiUrl + 'Cars/getallcardetaildtos';
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>
  {
    let path = this.apiUrl + 'Cars/getallcardetailsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }
}
