package com.example.produits.restcontrollers;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.example.produits.entities.Image;
import com.example.produits.service.ImageService;

@RestController
@RequestMapping("/api/image")
@CrossOrigin("*")
public class ImageRestController {

    @Autowired
    ImageService imageService;

    @PostMapping("/upload/{idProduit}")
    public Image uploadImage(
            @RequestParam("image") MultipartFile file,
            @PathVariable Long idProduit) throws IOException {

        return imageService.uploadImage(file, idProduit);
    }

    @GetMapping("/get/{idProduit}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long idProduit) {

        Image img = imageService.getImageByProduitId(idProduit);

        return ResponseEntity.ok()
                .contentType(MediaType.valueOf(img.getType()))
                .body(img.getImage());
    }
}
