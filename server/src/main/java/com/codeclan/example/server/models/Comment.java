package com.codeclan.example.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.text.SimpleDateFormat;

@Entity
@Table(name="comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties({"comments"})
    @ManyToOne
    @JoinColumn(name="traveller_id", nullable = false)
    private Traveller traveller;

    @JsonIgnoreProperties({"comments"})
    @ManyToOne
    @JoinColumn(name="trip_id", nullable = false)
    private Trip trip;

    @Column(name="comment")
    private String comment;

    @Column(name="date")
    private SimpleDateFormat date;

    public Comment(Traveller traveller, Trip trip, String comment, SimpleDateFormat date) {
        this.traveller = traveller;
        this.trip = trip;
        this.comment = comment;
        this.date = date;
    }

    public Comment() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Traveller getTraveller() {
        return traveller;
    }

    public void setTraveller(Traveller traveller) {
        this.traveller = traveller;
    }

    public Trip getTrip() {
        return trip;
    }

    public void setTrip(Trip trip) {
        this.trip = trip;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public SimpleDateFormat getDate() {
        return date;
    }

    public void setDate(SimpleDateFormat date) {
        this.date = date;
    }
}
