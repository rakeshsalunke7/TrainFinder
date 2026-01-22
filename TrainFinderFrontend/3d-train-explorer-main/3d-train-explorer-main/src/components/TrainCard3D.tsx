import { useState, useRef } from 'react';
import { Train, Clock, MapPin, ArrowRight } from 'lucide-react';

interface Station {
  stationCode: string;
  stationName: string;
  arrivalTime: string;
  departureTime: string;
  haltDuration: string;
  distance: number;
  dayNumber: number;
}

interface TrainData {
  trainNumber: string;
  trainName: string;
  runningDays: string[];
  sourceStation: Station;
  destinationStation: Station;
  stations: Station[];
}

interface TrainCard3DProps {
  train: TrainData;
  index: number;
}

const TrainCard3D = ({ train, index }: TrainCard3DProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const dayAbbreviations: Record<string, string> = {
    MONDAY: 'M',
    TUESDAY: 'T',
    WEDNESDAY: 'W',
    THURSDAY: 'Th',
    FRIDAY: 'F',
    SATURDAY: 'Sa',
    SUNDAY: 'Su',
  };

  return (
    <div
      className="perspective-1000 animate-slide-up opacity-0"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="transform-style-3d transition-transform duration-200 ease-out cursor-pointer"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
        }}
      >
        <div className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-glow-lg' : 'shadow-card'}`}>
          {/* Card Header */}
          <div className="relative bg-gradient-to-r from-primary/20 to-accent/10 p-4 border-b border-border/30">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
            </div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Train className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {train.trainName}
                  </h3>
                  <p className="text-sm text-primary font-mono">#{train.trainNumber}</p>
                </div>
              </div>
              
              {/* Running Days */}
              <div className="flex gap-1">
                {['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'].map((day) => (
                  <span
                    key={day}
                    className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-medium transition-colors ${
                      train.runningDays?.includes(day)
                        ? 'bg-primary/30 text-primary'
                        : 'bg-secondary/30 text-muted-foreground'
                    }`}
                  >
                    {dayAbbreviations[day]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Route Info */}
          <div className="p-6">
            <div className="flex items-center justify-between gap-4">
              {/* Source */}
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">From</span>
                </div>
                <p className="font-display font-bold text-xl text-foreground">
                  {train.sourceStation?.stationCode}
                </p>
                <p className="text-sm text-muted-foreground truncate max-w-[120px] mx-auto">
                  {train.sourceStation?.stationName}
                </p>
                <div className="mt-2 flex items-center justify-center gap-1 text-primary">
                  <Clock className="w-3 h-3" />
                  <span className="font-mono text-sm">{train.sourceStation?.departureTime}</span>
                </div>
              </div>

              {/* Arrow with Animation */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="w-24 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-accent rounded-full" />
                  <div 
                    className={`absolute top-1/2 -translate-y-1/2 left-0 w-4 h-4 bg-primary rounded-full transition-all duration-1000 ${isHovered ? 'translate-x-20' : 'translate-x-0'}`}
                  />
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {train.stations?.length || 0} stops
                </span>
              </div>

              {/* Destination */}
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">To</span>
                </div>
                <p className="font-display font-bold text-xl text-foreground">
                  {train.destinationStation?.stationCode}
                </p>
                <p className="text-sm text-muted-foreground truncate max-w-[120px] mx-auto">
                  {train.destinationStation?.stationName}
                </p>
                <div className="mt-2 flex items-center justify-center gap-1 text-accent">
                  <Clock className="w-3 h-3" />
                  <span className="font-mono text-sm">{train.destinationStation?.arrivalTime}</span>
                </div>
              </div>
            </div>

            {/* Journey Details */}
            {train.destinationStation?.distance && (
              <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Distance: <span className="text-foreground font-medium">{train.destinationStation.distance} km</span></span>
                </div>
                {train.destinationStation?.dayNumber > 1 && (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>Day: <span className="text-foreground font-medium">{train.destinationStation.dayNumber}</span></span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Hover Overlay */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default TrainCard3D;
