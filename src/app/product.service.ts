import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const URL_SERVER = 'https://theartezan.xyz/wp-json';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  postProducts(data: any[], token): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;'
    });
    return this.http.post(
      URL_SERVER + '/wc/v2/products/batch',
      { create: data },
      {
        headers: headers
      }
    );
  }
  getProduct(token): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;'
    });
    return this.http.get(
      URL_SERVER + '/wc/v2/products',
      {
        headers: headers
      }
    );
  }
  getTokenJWT(username: string, password: string): Observable<any> {

    const body = {
      username,
      password
    };
    return this.http.post(URL_SERVER + '/jwt-auth/v1/token', body);
  }
  validateToken(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;'
    });

    return this.http.post(URL_SERVER + '/jwt-auth/v1/token/validate', {},
      {
        headers: headers
      });

    /**
     *
 {
  "code": "jwt_auth_valid_token",
  "data": {
      "status": 200
  }
}
     */
  }
}
