import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  protected apiUrl = "http://fb09785f.ngrok.io";
  data: string;

  constructor(private http: HttpClient) {
  }

  getWithKey(key: string) {
    return this.http.get<string>(`${this.apiUrl}`, { params: { Key: key } });
  }

  get() {
    return this.http.get<string>(`${this.apiUrl}`);
  }

  post(text: string) {
    return this.http.post(this.apiUrl, text);
  }
}
