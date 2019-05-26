import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  protected apiUrl = environment.apiUrl;
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
