package com.example.TrainBetweenStations.enitity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Train {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String trainName;

    private String trainNumber;

    @OneToMany(mappedBy = "train",cascade = CascadeType.ALL,fetch=FetchType.LAZY)
    @JsonBackReference
    private List<TrainSchedule> scheduleList;

    public Train( String trainName, String trainNumber, List<TrainSchedule> scheduleList) {
        this.trainName = trainName;
        this.trainNumber = trainNumber;
        this.scheduleList = scheduleList;
    }
}
