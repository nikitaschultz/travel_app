package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.Traveller;
import com.codeclan.example.server.repositories.TravellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TravellerController {
    @Autowired
    TravellerRepository travellerRepository;

    @GetMapping(value="/travellers")
    public ResponseEntity<List<Traveller>> getAllTravellers(){
        return new ResponseEntity<>(travellerRepository.findAll(), HttpStatus.OK);
    }
}
