package com.example.produits.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idImage;

    private String name;
    private String type;

    @Lob
    @Column(length = 1000000)
    private byte[] image;

    @OneToOne
    private Produit produit;
}
