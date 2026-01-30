package com.example.produits.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.produits.entities.Categorie;

public interface CategorieRepository extends JpaRepository<Categorie, Long> {
}
