import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  apiURL = 'http://localhost:8080/api/produits';

  constructor(private http: HttpClient) {}

  listeProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL);
  }

  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiURL, prod);
  }

  supprimerProduit(id: number) {
    return this.http.delete(this.apiURL + '/' + id);
  }

  consulterProduit(id: number): Observable<Produit> {
    return this.http.get<Produit>(this.apiURL + '/' + id);
  }

  updateProduit(prod: Produit): Observable<Produit> {
    return this.http.put<Produit>(this.apiURL, prod);
  }
}
