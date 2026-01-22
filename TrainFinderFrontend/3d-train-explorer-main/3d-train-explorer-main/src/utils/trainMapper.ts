import { BackendTrainSchedule, UITrain } from "@/types/train";

export function mapBackendToUI(data: BackendTrainSchedule): UITrain {
  return {
    trainName: data.train.trainName,
    trainNumber: data.train.trainNumber,

    sourceStation: {
      stationCode: data.source.stationCode,
      stationName: data.source.stationName,
      departureTime: data.departureTime,
    },

    destinationStation: {
      stationCode: data.destination.stationCode,
      stationName: data.destination.stationName,
      arrivalTime: data.arrivalTime,
    },
  };
}
