package com.codeclan.example.server.models.plans;

import com.codeclan.example.server.models.Plan;

import javax.persistence.*;
import java.text.SimpleDateFormat;

@Entity
@Table(name="accommodations")
public class Accommodation extends Plan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="address")
    private String address;

    @Column(name="numOfNights")
    private int numOfNights;

    public Accommodation(SimpleDateFormat date, String bookingConfirmation, String name, String address, int numOfNights) {
        super(date, bookingConfirmation);
        this.name = name;
        this.address = address;
        this.numOfNights = numOfNights;
    }

    public Accommodation() {
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getNumOfNights() {
        return numOfNights;
    }

    public void setNumOfNights(int numOfNights) {
        this.numOfNights = numOfNights;
    }
}
