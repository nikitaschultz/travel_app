package com.codeclan.example.server.components;

import com.codeclan.example.server.models.Comment;
import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.models.Traveller;
import com.codeclan.example.server.models.Trip;
import com.codeclan.example.server.models.plans.Accommodation;
import com.codeclan.example.server.models.plans.Event;
import com.codeclan.example.server.models.plans.Flight;
import com.codeclan.example.server.models.plans.Train;
import com.codeclan.example.server.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    TravellerRepository travellerRepository;

    @Autowired
    HolidayRepository holidayRepository;

    @Autowired
    TripRepository tripRepository;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    FlightRepository flightRepository;

    @Autowired
    EventRepository eventRepository;

    @Autowired
    AccommodationRepository accommodationRepository;

    @Autowired
    TrainRepository trainRepository;

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

        Date date = new Date();

        Comment comment1 = new Comment(traveller1, trip2, "Was great to see family!", date);
        commentRepository.save(comment1);

        Comment comment2 = new Comment(traveller1, trip3, "Had a great view of the river.", date);
        commentRepository.save(comment2);

        Flight flight = new Flight(trip2, date, "12345A", "GLA", "GDN", "1030", "2000", "FLI1234");
        flightRepository.save(flight);

        Event event = new Event(trip2, date, "1234E", "Dinner", "Montezumas");
        eventRepository.save(event);

        Accommodation accommodation = new Accommodation(trip3, date, "ABCD123", "Premier Inn", "123 Fake St", 2);
        accommodationRepository.save(accommodation);

        Train train = new Train(trip1, date, "EEE22", "Glasgow", "Edinburgh", "1000", "1130");
        trainRepository.save(train);
    }
}
