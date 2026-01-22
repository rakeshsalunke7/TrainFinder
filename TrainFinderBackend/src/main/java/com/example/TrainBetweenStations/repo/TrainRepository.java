package com.example.TrainBetweenStations.repo;

import com.example.TrainBetweenStations.enitity.Train;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainRepository extends JpaRepository<Train,Long> {
}
