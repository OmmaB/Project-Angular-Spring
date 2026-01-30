import { Routes } from '@angular/router';
import { Produits } from './produits/produits';
import { AddProduitComponent } from './add-produit/add-produit';
import { UpdateProduitComponent } from './update-produit/update-produit';
import { Forbidden } from './forbidden/forbidden';
import { ProduitGuard } from './services/produit-guard';
import { LoginComponent } from './login/login';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'produits', component: Produits },
  { path: 'add-produit', component: AddProduitComponent, canActivate: [ProduitGuard] },
  { path: 'update-produit/:id', component: UpdateProduitComponent, canActivate: [ProduitGuard] },
  { path: 'app-forbidden', component: Forbidden },
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
];
