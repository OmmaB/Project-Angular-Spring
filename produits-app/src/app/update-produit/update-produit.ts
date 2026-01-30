import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit';
import { Produit } from '../models/produit';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-update-produit',
  templateUrl: './update-produit.html',
  imports: [CommonModule, FormsModule],
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();

  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.produitService.consulterProduit(id).subscribe((p) => (this.currentProduit = p));
  }

  updateProduit() {
    this.produitService
      .updateProduit(this.currentProduit)
      .subscribe(() => this.router.navigate(['/produits']));
  }
}
