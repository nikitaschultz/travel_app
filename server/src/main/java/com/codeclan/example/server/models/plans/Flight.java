package com.codeclan.example.server.models.plans;

import com.codeclan.example.server.models.Plan;
import com.codeclan.example.server.models.Trip;

import javax.persistence.*;
import java.text.SimpleDateFormat;

@Entity
@Table(name = "flights")
public class Flight extends Plan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="departure_airport")
    private String departureAirport;

    @Column(name="arrival_airport")
    private String arrivalAirport;

    @Column(name="departure_time")
    private String departureTime;

    @Column(name="arrival_time")
    private String arrivalTime;

    @Column(name="flight_number")
    private String flightNumber;

    public Flight(Trip trip, SimpleDateFormat date, String bookingConfirmation, String departureAirport, String arrivalAirport, String departureTime, String arrivalTime, String flightNumber) {
        super(trip, date, bookingConfirmation);
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.flightNumber = flightNumber;
    }

    public Flight() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDepartureAirport() {
        return departureAirport;
    }

    public void setDepartureAirport(String departureAirport) {
        this.departureAirport = departureAirport;
    }

    public String getArrivalAirport() {
        return arrivalAirport;
    }

    public void setArrivalAirport(String arrivalAirport) {
        this.arrivalAirport = arrivalAirport;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }
}
