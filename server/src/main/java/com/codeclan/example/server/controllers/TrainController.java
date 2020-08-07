package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.plans.Train;
import com.codeclan.example.server.repositories.TrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TrainController {

    @Autowired
    TrainRepository trainRepository;

    @GetMapping(value="/trains")
    public ResponseEntity<List<Train>> getAllTrains(){
        return new ResponseEntity<>(trainRepository.findAll(), HttpStatus.OK);
    }
}
