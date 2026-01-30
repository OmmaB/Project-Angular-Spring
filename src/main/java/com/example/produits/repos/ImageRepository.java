package com.example.produits.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.produits.entities.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {
    Image findByProduitIdProduit(Long idProduit);
}
