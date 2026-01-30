package com.example.produits.service;

import com.example.produits.entities.Image;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

public interface ImageService {

    Image uploadImage(MultipartFile file, Long idProduit) throws IOException;
    Image getImageByProduitId(Long idProduit);
}
