package com.codeclan.example.server.models;

import javax.persistence.Column;
import java.text.SimpleDateFormat;

public abstract class Plan {

    @Column(name="date")
    private SimpleDateFormat date;

    @Column(name="bookingConfirmation")
    private String bookingConfirmation;

    public Plan(SimpleDateFormat date, String bookingConfirmation) {
        this.date = date;
        this.bookingConfirmation = bookingConfirmation;
    }

    public Plan() {
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
}
