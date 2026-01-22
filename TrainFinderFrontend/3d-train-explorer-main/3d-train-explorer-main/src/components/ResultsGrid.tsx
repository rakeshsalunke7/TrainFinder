import TrainCard3D from './TrainCard3D';
import { Train } from 'lucide-react';
import { TrainResult } from '@/pages/Index';

interface ResultsGridProps {
  trains: TrainResult[];
  source: string;
  destination: string;
}

const ResultsGrid = ({ trains, source, destination }: ResultsGridProps) => {
  if (trains.length === 0) {
    return (
      <div className="text-center py-16">
        <Train className="w-10 h-10 mx-auto mb-4 text-muted-foreground" />
        <p className="text-muted-foreground">
          No trains found from {source} to {destination}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      {trains.map((item, index) => (
        <TrainCard3D
          key={index}
          index={index}
          train={{
            trainName: item.train.trainName,
            trainNumber: item.train.trainNumber,
            runningDays: [],
            sourceStation: {
              stationCode: item.source.stationCode,
              stationName: item.source.stationName,
              departureTime: item.departureTime,
            },
            destinationStation: {
              stationCode: item.destination.stationCode,
              stationName: item.destination.stationName,
              arrivalTime: item.arrivalTime,
            },
            stations: [],
          }}
        />
      ))}
    </div>
  );
};

export default ResultsGrid;
