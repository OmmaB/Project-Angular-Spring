package com.example.produits.restcontrollers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.produits.entities.Produit;
import com.example.produits.service.ProduitService;

@RestController
@RequestMapping("/api/produits")
@CrossOrigin("*")
public class ProduitRestController {

    @Autowired
    ProduitService produitService;

    @GetMapping
    public List<Produit> getAllProduits() {
        return produitService.getAllProduits();
    }

    @GetMapping("/{id}")
    public Produit getProduitById(@PathVariable Long id) {
        return produitService.getProduit(id);
    }

    @PostMapping
    public Produit createProduit(@RequestBody Produit p) {
        return produitService.saveProduit(p);
    }

    @PutMapping
    public Produit updateProduit(@RequestBody Produit p) {
        return produitService.updateProduit(p);
    }

    @DeleteMapping("/{id}")
    public void deleteProduit(@PathVariable Long id) {
        produitService.deleteProduitById(id);
    }
}
