import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = 'https://localhost:7086/api/';

  getColors():Observable<ListResponseModel<Color>>
  {
    let path = this.apiUrl + "Colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(path);
  }
}
