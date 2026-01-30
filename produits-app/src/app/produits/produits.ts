import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit';
import { Produit } from '../models/produit';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-produits',
  imports: [CommonModule, RouterModule],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits implements OnInit {
  produits!: Produit[];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.listeProduits().subscribe((data) => (this.produits = data));
  }

  supprimerProduit(p: Produit) {
    if (confirm('Supprimer ce produit ?')) {
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        this.produits = this.produits.filter((pr) => pr.idProduit !== p.idProduit);
      });
    }
  }
}
