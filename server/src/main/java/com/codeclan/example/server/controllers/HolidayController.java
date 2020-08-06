package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.repositories.HolidayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HolidayController {

    @Autowired
    HolidayRepository holidayRepository;

    @GetMapping(value = "/holidays")
    public ResponseEntity<List<Holiday>> getAllHolidays(){
        return new ResponseEntity<>(holidayRepository.findAll(), HttpStatus.OK);
    }
}
