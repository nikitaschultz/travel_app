package com.codeclan.example.server;

import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.models.Trip;
import com.codeclan.example.server.models.plans.Event;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.text.SimpleDateFormat;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class EventTest {

    private Holiday holiday;
    private Trip trip;
    private Event event;
    private SimpleDateFormat date;

    @BeforeEach
    public void before(){
        holiday = new Holiday("Christmas", false);
        trip = new Trip("Poland", holiday);
        date = new SimpleDateFormat("2020-12-20");
        event = new Event(trip, date, "1234E", "Dinner", "Montezumas");
    }

    @Test
    public void canGetAllProperties(){
        assertEquals(trip, event.getTrip());
        assertEquals(date, event.getDate());
        assertEquals("1234E", event.getBookingConfirmation());
        assertEquals("Dinner", event.getName());
        assertEquals("Montezumas", event.getLocation());
    }
}
