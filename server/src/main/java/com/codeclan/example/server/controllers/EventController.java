package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.plans.Event;
import com.codeclan.example.server.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EventController {

    @Autowired
    EventRepository eventRepository;

    @GetMapping(value="/events")
    public ResponseEntity<List<Event>> getAllEvents(){
        return new ResponseEntity<>(eventRepository.findAll(), HttpStatus.OK);
    }

}