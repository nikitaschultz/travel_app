package com.codeclan.example.server;

import com.codeclan.example.server.models.Traveller;
import com.codeclan.example.server.repositories.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ServerApplicationTests {

	@Autowired
	AccommodationRepository accommodationRepository;

	@Autowired
	EventRepository eventRepository;

	@Autowired
	FlightRepository flightRepository;

	@Autowired
	HolidayRepository holidayRepository;

	@Autowired
	TrainRepository trainRepository;

	@Autowired
	TravellerRepository travellerRepository;

	@Autowired
	TripRepository tripRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canCreateTravellerAndSave(){
		Traveller traveller = new Traveller("Nikita", "beach");
		travellerRepository.save(traveller);
	}


}
