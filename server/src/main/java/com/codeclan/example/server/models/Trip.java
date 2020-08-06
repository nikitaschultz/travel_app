package com.codeclan.example.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name="trips")
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="location")
    private String location;

    @JsonIgnoreProperties({"trips"})
    @ManyToOne
    @JoinColumn(name="holiday_id", nullable = false)
    private Holiday holiday;

    @JsonBackReference
    @OneToMany(mappedBy="trip", fetch = FetchType.LAZY)
    private ArrayList<Plan> plans;

    @JsonBackReference
    @OneToMany(mappedBy="trip", fetch = FetchType.LAZY)
    private ArrayList<Comment> comments;

    public Trip(String location, Holiday holiday) {
        this.location = location;
        this.holiday = holiday;
        this.plans = new ArrayList<Plan>();
        this.comments = new ArrayList<Comment>();
    }

    public Trip() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Holiday getHoliday() {
        return holiday;
    }

    public void setHoliday(Holiday holiday) {
        this.holiday = holiday;
    }
}
