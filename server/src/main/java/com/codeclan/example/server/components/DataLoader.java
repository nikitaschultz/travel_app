package com.codeclan.example.server.components;

import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.models.Traveller;
import com.codeclan.example.server.models.Trip;
import com.codeclan.example.server.repositories.HolidayRepository;
import com.codeclan.example.server.repositories.TravellerRepository;
import com.codeclan.example.server.repositories.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    TravellerRepository travellerRepository;

    @Autowired
    HolidayRepository holidayRepository;

    @Autowired
    TripRepository tripRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Traveller traveller1 = new Traveller("Nikita", "beach");
        travellerRepository.save(traveller1);

        Traveller traveller2 = new Traveller("Sam", "forest");
        travellerRepository.save(traveller2);

        Traveller traveller3 = new Traveller("Matthew", "desert");
        travellerRepository.save(traveller3);

        Holiday holiday1 = new Holiday("Christmas", false);
        holiday1.addTraveller(traveller1);
        holidayRepository.save(holiday1);

        Holiday holiday2 = new Holiday("Australia Trip", true);
        holiday2.addTraveller(traveller1);
        holidayRepository.save(holiday2);

        Trip trip1 = new Trip("Gdansk", holiday1);
        tripRepository.save(trip1);

        Trip trip2 = new Trip("Brisbane", holiday2);
        tripRepository.save(trip2);

        Trip trip3 = new Trip("Melbourne", holiday2);
        tripRepository.save(trip3);
    }
}
