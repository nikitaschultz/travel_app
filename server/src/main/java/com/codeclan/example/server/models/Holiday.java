package com.codeclan.example.server.models;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name="holidays")
public class Holiday {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="travellers")
    private ArrayList<Traveller> travellers;

    @Column(name="isPublished")
    private boolean isPublished;

    public Holiday(String title, boolean isPublished) {
        this.title = title;
        this.isPublished = isPublished;
        this.travellers = new ArrayList<Traveller>();
    }

    public Holiday() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public ArrayList<com.codeclan.example.server.models.Traveller> getTravellers() {
        return travellers;
    }

    public void setTravellers(ArrayList<com.codeclan.example.server.models.Traveller> travellers) {
        this.travellers = travellers;
    }

    public boolean isPublished() {
        return isPublished;
    }

    public void setPublished(boolean published) {
        isPublished = published;
    }
}
