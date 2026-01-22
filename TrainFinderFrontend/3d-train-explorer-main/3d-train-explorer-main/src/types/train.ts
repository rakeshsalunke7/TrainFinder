export interface BackendTrainSchedule {
  id: number;
  departureTime: string;
  arrivalTime: string;

  train: {
    trainName: string;
    trainNumber: string;
    id: number;
  };

  source: {
    stationCode: string;
    stationName: string;
    id: number;
  };

  destination: {
    stationCode: string;
    stationName: string;
    id: number;
  };
}

export interface UITrain {
  trainName: string;
  trainNumber: string;
  sourceStation: {
    stationCode: string;
    stationName: string;
    departureTime: string;
  };
  destinationStation: {
    stationCode: string;
    stationName: string;
    arrivalTime: string;
  };
}
