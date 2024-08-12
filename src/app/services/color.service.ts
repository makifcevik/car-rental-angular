import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = 'https://localhost:7086/api/Colors/getall';

  getColors():Observable<ColorResponseModel>
  {
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
