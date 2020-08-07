package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.plans.Flight;
import com.codeclan.example.server.repositories.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FlightController {

    @Autowired
    FlightRepository flightRepository;

    @GetMapping(value="/flights")
    public ResponseEntity<List<Flight>> getAllFlights(){
        return new ResponseEntity<>(flightRepository.findAll(), HttpStatus.OK);
    }
}
