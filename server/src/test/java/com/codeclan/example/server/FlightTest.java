package com.codeclan.example.server;

import com.codeclan.example.server.models.plans.Flight;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.text.SimpleDateFormat;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FlightTest {

    private SimpleDateFormat date;
    private Flight flight;

    @BeforeEach
    public void before(){
        date = new SimpleDateFormat("2020-12-20");
        flight = new Flight(date, "12345A", "GLA", "GDN", "1030", "2000", "FLI1234");
    }

    @Test
    public void canGetAllProperties(){
        assertEquals(date, flight.getDate());
        assertEquals("12345A", flight.getBookingConfirmation());
        assertEquals("GLA", flight.getDepartureAirport());
        assertEquals("GDN", flight.getArrivalAirport());
        assertEquals("1030", flight.getDepartureTime());
        assertEquals("2000", flight.getArrivalTime());
        assertEquals("FLI1234", flight.getFlightNumber());
    }
}
