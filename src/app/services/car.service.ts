import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarReponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = 'https://localhost:7086/api/Cars/getallcardetaildtos';

  getCars():Observable<CarReponseModel>
  {
    return this.httpClient.get<CarReponseModel>(this.apiUrl);
  }
}
