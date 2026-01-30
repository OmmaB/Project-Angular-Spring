package com.example.produits.service;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.example.produits.entities.Image;
import com.example.produits.entities.Produit;
import com.example.produits.repos.ImageRepository;
import com.example.produits.repos.ProduitRepository;

@Service
public class ImageServiceImpl implements ImageService {

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    ProduitRepository produitRepository;

    @Override
    public Image uploadImage(MultipartFile file, Long idProduit) throws IOException {
        Produit p = produitRepository.findById(idProduit).get();

        Image image = Image.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .image(file.getBytes())
                .produit(p)
                .build();

        return imageRepository.save(image);
    }

    @Override
    public Image getImageByProduitId(Long idProduit) {
        return imageRepository.findByProduitIdProduit(idProduit);
    }
}
