package com.codeclan.example.server.components;

import com.codeclan.example.server.models.Traveller;
import com.codeclan.example.server.repositories.TravellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    TravellerRepository travellerRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Traveller traveller = new Traveller("Nikita", "beach");
        travellerRepository.save(traveller);

        
    }
}
