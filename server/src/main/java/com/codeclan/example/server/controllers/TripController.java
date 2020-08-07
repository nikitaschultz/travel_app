package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.Trip;
import com.codeclan.example.server.repositories.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TripController {

    @Autowired
    TripRepository tripRepository;

    @GetMapping(value="/trips")
    public ResponseEntity<List<Trip>> getAllTrips(){
        return new ResponseEntity<>(tripRepository.findAll(), HttpStatus.OK);
    }
}