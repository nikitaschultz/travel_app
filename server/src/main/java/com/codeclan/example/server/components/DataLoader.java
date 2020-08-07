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
        Traveller hamilton = new Traveller("Alexander Hamilton", "beach");
        travellerRepository.save(hamilton);

        Traveller burr = new Traveller("Aaron Burr", "forest");
        travellerRepository.save(burr);

        Traveller jefferson = new Traveller("Thomas Jefferson", "desert");
        travellerRepository.save(jefferson);

        Traveller washington = new Traveller("George Washington", "mountain");
        travellerRepository.save(washington);

        Holiday holiday1 = new Holiday("Coming to the Mainland", true);
        holiday1.addTraveller(hamilton);
        holidayRepository.save(holiday1);

        Holiday holiday2 = new Holiday("Going Home", true);
        holiday2.addTraveller(washington);
        holidayRepository.save(holiday2);

        Holiday holiday3 = new Holiday("Avoiding the War", true);
        holiday3.addTraveller(jefferson);
        holidayRepository.save(holiday3);

        Holiday holiday4 = new Holiday("Constitutional Convention Trip", true);
        holiday4.addTraveller(hamilton);
        holidayRepository.save(holiday4);

        Holiday holiday5 = new Holiday("Duel", false);
        holiday5.addTraveller(hamilton);
        holiday5.addTraveller(burr);
        holidayRepository.save(holiday5);

        Holiday holiday6 = new Holiday("Debt Plan Negotiations", true);
        holiday6.addTraveller(hamilton);
        holiday6.addTraveller(jefferson);
        holidayRepository.save(holiday6);

        Trip trip1 = new Trip(40.7128, 74.0060, "New York", holiday6);
        tripRepository.save(trip1);

        Trip trip2 = new Trip(39.9526,75.1652, "Philadelphia", holiday4);
        tripRepository.save(trip2);

        Trip trip3 = new Trip(40.9126,73.8371, "Mount Vernon", holiday2);
        tripRepository.save(trip3);

        Trip trip4 = new Trip(37.4316, 78.6569, "Virginia", holiday3);
        tripRepository.save(trip4);

        Trip trip5 = new Trip(48.8566, 2.3522, "Paris", holiday3);
        tripRepository.save(trip5);

        Trip trip6 = new Trip(40.7128, 74.0060, "New York", holiday3);
        tripRepository.save(trip6);

        Trip trip7 = new Trip(17.1554, 62.5796, "Caribbean", holiday1);
        tripRepository.save(trip7);

        Trip trip8 = new Trip(40.7128, 74.0060, "New York", holiday1);
        tripRepository.save(trip8);

        Date d1773 = new Date(-6216652725000L);
        Date d1773b = new Date(-6208876725000L);
        Date d1787 = new Date(-5762447925000L);
        Date d1784 = new Date(-5869583925000L);
        Date d1789 = new Date(-5711731125000L);
        Date d1790 = new Date(-5667148725000L);
        Date d1790b = new Date(-5667062325000L);


        Comment comment1 = new Comment(hamilton, trip7, "So grateful for the funds raised by the community leaders.  Can't wait to get to the North American Colonies and get my education.  This is my shot!!!", d1773);
        commentRepository.save(comment1);

        Comment comment2 = new Comment(hamilton, trip8, "Excited to be in the greatest city in the world!", d1773b);
        commentRepository.save(comment2);

        Comment comment3 = new Comment(hamilton, trip1, "FINALLY got my debt plan approved.  Washington's going to be so excited.  Great doing business with you Jefferson (lol).", d1790);
        commentRepository.save(comment3);

        Comment comment4 = new Comment(jefferson, trip1, "I just wanted a shorter commute, Ham.", d1790b);
        commentRepository.save(comment4);

        Comment comment5 = new Comment(hamilton, trip2, "I was chosen for the constitutional convention!!", d1787);
        commentRepository.save(comment5);

        Comment comment6 = new Comment(jefferson, trip4, "Things are getting pretty wild here, might go hang out in France for a while.", d1784);
        commentRepository.save(comment6);

        Comment comment8 = new Comment(jefferson, trip6, "Might just come back and be Secretary of state ;)", d1789);
        commentRepository.save(comment8);


//        Flight flight = new Flight(trip2, date, "12345A", "GLA", "GDN", "1030", "2000", "FLI1234");
//        flightRepository.save(flight);
//
//        Event event = new Event(trip2, date, "1234E", "Dinner", "Montezumas");
//        eventRepository.save(event);
//
//        Accommodation accommodation = new Accommodation(trip3, date, "ABCD123", "Premier Inn", "123 Fake St", 2);
//        accommodationRepository.save(accommodation);
//
//        Train train = new Train(trip1, date, "EEE22", "Glasgow", "Edinburgh", "1000", "1130");
//        trainRepository.save(train);
    }
}
