import { Component } from '@angular/core';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-add-produit',
  templateUrl: './add-produit.html',
  imports: [CommonModule, FormsModule],
})
export class AddProduitComponent {
  newProduit = new Produit();
  selectedImage!: File;

  constructor(
    private produitService: ProduitService,
    private router: Router,
    private http: HttpClient,
  ) {}

  // called when file input changes
  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  addProduit() {
    this.produitService.ajouterProduit(this.newProduit).subscribe((prod) => {
      // if no image selected → just redirect
      if (!this.selectedImage) {
        this.router.navigate(['/produits']);
        return;
      }

      // upload image
      const formData = new FormData();
      formData.append('image', this.selectedImage);

      this.http
        .post(`http://localhost:8080/api/image/upload/${prod.idProduit}`, formData)
        .subscribe(() => {
          this.router.navigate(['/produits']);
        });
    });
  }
}
