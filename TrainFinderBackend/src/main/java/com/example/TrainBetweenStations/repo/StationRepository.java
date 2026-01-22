package com.example.TrainBetweenStations.repo;

import com.example.TrainBetweenStations.enitity.Station;
import org.hibernate.boot.models.JpaAnnotations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StationRepository extends JpaRepository<Station,Long> {
}
