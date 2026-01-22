package com.example.TrainBetweenStations.controller;

import com.example.TrainBetweenStations.enitity.Train;
import com.example.TrainBetweenStations.service.TrainService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trains")
public class TrainController {

    private TrainService trainService;
    TrainController(TrainService trainService){
        this.trainService=trainService;
    }

    @GetMapping
    public List<Train> getAllTrains(){
        return trainService.getAllTrains();
    }

    @PostMapping
    public Train addTrain(@RequestBody Train train){
        return this.trainService.addTrain(train);
    }



}
