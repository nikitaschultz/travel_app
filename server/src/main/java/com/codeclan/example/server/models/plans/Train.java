package com.codeclan.example.server.models.plans;

import com.codeclan.example.server.models.Plan;

import javax.persistence.*;
import java.text.SimpleDateFormat;

@Entity
@Table(name="trains")
public class Train extends Plan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="departureStation")
    private String DepartureStation;

    @Column(name="arrivalStation")
    private String arrivalStation;

    @Column(name="departureTime")
    private String departureTime;

    @Column(name="arrivalTime")
    private String arrivalTime;

    public Train(SimpleDateFormat date, String bookingConfirmation, String departureStation, String arrivalStation, String departureTime, String arrivalTime) {
        super(date, bookingConfirmation);
        DepartureStation = departureStation;
        this.arrivalStation = arrivalStation;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
    }

    public Train() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDepartureStation() {
        return DepartureStation;
    }

    public void setDepartureStation(String departureStation) {
        DepartureStation = departureStation;
    }

    public String getArrivalStation() {
        return arrivalStation;
    }

    public void setArrivalStation(String arrivalStation) {
        this.arrivalStation = arrivalStation;
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
}
