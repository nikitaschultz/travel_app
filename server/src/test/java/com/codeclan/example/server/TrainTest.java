package com.codeclan.example.server;

import com.codeclan.example.server.models.plans.Train;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.text.SimpleDateFormat;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class TrainTest {

    private SimpleDateFormat date;
    private Train train;

    @BeforeEach
    public void before(){
        date = new SimpleDateFormat("2020-12-20");
        train = new Train(date, "EEE22", "Glasgow", "Edinburgh", "1000", "1130");
    }

    @Test
    public void canGetAllProperties(){
        assertEquals(date, train.getDate());
        assertEquals("EEE22", train.getBookingConfirmation());
        assertEquals("Glasgow", train.getDepartureStation());
        assertEquals("Edinburgh", train.getArrivalStation());
        assertEquals("1000", train.getDepartureTime());
        assertEquals("1130", train.getArrivalTime());
    }
}
