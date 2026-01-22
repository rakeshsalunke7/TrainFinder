package com.example.TrainBetweenStations.controller;

import com.example.TrainBetweenStations.enitity.Station;
import com.example.TrainBetweenStations.enitity.Train;
import com.example.TrainBetweenStations.enitity.TrainSchedule;
import com.example.TrainBetweenStations.repo.StationRepository;
import com.example.TrainBetweenStations.repo.TrainRepository;
import com.example.TrainBetweenStations.repo.TrainScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/test")
public class Test {

    @Autowired
    StationRepository stationRepository;

    @Autowired
    TrainRepository trainRepository;

    @Autowired
    TrainScheduleRepository trainScheduleRepository;

    @GetMapping
    public void test(){
        Station delhi=new Station("NDLS","New Delhi");
        Station mumbai=new Station("CSMT","Chatrapati Shivaji Maharaj Terminal");
        Station kolkata=new Station("KMT","Kolkata");
        Station pune=new Station("PJ","Pune Station");

        stationRepository.saveAll(List.of(delhi,mumbai,kolkata,pune));

        Train rajDhani=new Train("RajDhani EXpress","12306",null);
        Train duronto=new Train("Duronto EXpress","12346",null);
        Train shatabdi=new Train("Shatabdi EXpress","12206",null);

        trainRepository.saveAll(List.of(rajDhani,duronto,shatabdi));

        TrainSchedule sc1=new TrainSchedule(rajDhani,delhi,mumbai,"6:00","14:00");
        TrainSchedule sc2=new TrainSchedule(rajDhani,mumbai,kolkata,"8:00","21:00");
        TrainSchedule sc3=new TrainSchedule(shatabdi,kolkata,pune,"11:30","19:00");

        trainScheduleRepository.saveAll(List.of(sc1,sc2,sc3));

        System.out.println("Data inserted in database");
    }
}
