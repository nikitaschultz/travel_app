package com.codeclan.example.server.models;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name="travellers")
public class Traveller {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="holidays")
    private ArrayList<Holiday> holidays;

    public Traveller(String name) {
        this.name = name;
        this.holidays = new ArrayList<Holiday>();
    }

    public Traveller() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ArrayList<Holiday> getHolidays() {
        return holidays;
    }

    public void setHolidays(ArrayList<Holiday> holidays) {
        this.holidays = holidays;
    }

    public void addHoliday(Holiday holiday){
        this.holidays.add(holiday);
    }
}
