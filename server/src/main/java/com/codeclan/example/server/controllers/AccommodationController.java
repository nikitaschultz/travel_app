package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.plans.Accommodation;
import com.codeclan.example.server.repositories.AccommodationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AccommodationController {

    @Autowired
    AccommodationRepository accommodationRepository;

    @GetMapping(value="/accommodations")
    public ResponseEntity<List<Accommodation>> getAllAccommodations(){
        return new ResponseEntity<>(accommodationRepository.findAll(), HttpStatus.OK);
    }
}
