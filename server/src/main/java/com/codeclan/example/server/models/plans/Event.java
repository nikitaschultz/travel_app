package com.codeclan.example.server.models.plans;

import com.codeclan.example.server.models.Plan;
import com.codeclan.example.server.models.Trip;

import javax.persistence.*;
import java.text.SimpleDateFormat;

@Entity
@Table(name="events")
public class Event extends Plan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="location")
    private String location;

    public Event(Trip trip, SimpleDateFormat date, String bookingConfirmation, String name, String location) {
        super(trip, date, bookingConfirmation);
        this.name = name;
        this.location = location;
    }

    public Event() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
