package com.codeclan.example.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.text.SimpleDateFormat;

@Entity
public abstract class Plan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="date")
    private SimpleDateFormat date;

    @Column(name="booking_confirmation")
    private String bookingConfirmation;

    @JsonIgnoreProperties({"plans"})
    @ManyToOne
    @JoinColumn(name="trip_id", nullable = false)
    private Trip trip;

    public Plan(Trip trip, SimpleDateFormat date, String bookingConfirmation) {
        this.trip = trip;
        this.date = date;
        this.bookingConfirmation = bookingConfirmation;
    }

    public Plan() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public SimpleDateFormat getDate() {
        return date;
    }

    public void setDate(SimpleDateFormat date) {
        this.date = date;
    }

    public String getBookingConfirmation() {
        return bookingConfirmation;
    }

    public void setBookingConfirmation(String bookingConfirmation) {
        this.bookingConfirmation = bookingConfirmation;
    }

    public Trip getTrip() {
        return trip;
    }

    public void setTrip(Trip trip) {
        this.trip = trip;
    }
}
