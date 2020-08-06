package com.codeclan.example.server;

import com.codeclan.example.server.models.Comment;
import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.models.Traveller;
import com.codeclan.example.server.models.Trip;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.text.SimpleDateFormat;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CommentTest {

    private Traveller traveller;
    private Holiday holiday;
    private Trip trip;
    private Comment comment;
    private SimpleDateFormat date;

    @BeforeEach
    public void before(){
        date = new SimpleDateFormat("2020-12-20");
        traveller = new Traveller("Nikita", "sun");
        holiday = new Holiday("Christmas", false);
        trip = new Trip("Poland", holiday);
        comment = new Comment(traveller, trip, "Had such a great trip!", date);
    }

    @Test
    public void canGetAllProperties(){
        assertEquals(date, comment.getDate());
        assertEquals(traveller, comment.getTraveller());
        assertEquals(trip, comment.getTrip());
        assertEquals("Had such a great trip!", comment.getComment());
    }

}
