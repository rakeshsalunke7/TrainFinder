import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import SearchForm from '@/components/SearchForm';
import ResultsGrid from '@/components/ResultsGrid';
import Loader3D from '@/components/Loader3D';
import { AlertCircle } from 'lucide-react';

export interface TrainResult {
  train: {
    trainName: string;
    trainNumber: string;
  };
  source: {
    stationCode: string;
    stationName: string;
  };
  destination: {
    stationCode: string;
    stationName: string;
  };
  departureTime: string;
  arrivalTime: string;
}

const Index = () => {
  const [trains, setTrains] = useState<TrainResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchParams, setSearchParams] = useState({ source: '', destination: '' });

  const handleSearch = async (source: string, destination: string) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setSearchParams({ source, destination });

    try {
      const response = await fetch(
        `http://localhost:8080/search/by-code?sourceCode=${source}&destinationCode=${destination}`
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      setTrains(data);
    } catch (err) {
      setError('Failed to fetch train data. Ensure backend is running on port 8080.');
      setTrains([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="relative z-10 -mt-8 px-4 pb-8">
        <SearchForm onSearch={handleSearch} isLoading={isLoading} />
      </section>

      <section className="px-4 py-12">
        {isLoading ? (
          <Loader3D />
        ) : error ? (
          <div className="max-w-2xl mx-auto glass-card p-8 text-center">
            <AlertCircle className="w-8 h-8 mx-auto mb-4 text-destructive" />
            <p className="text-muted-foreground">{error}</p>
          </div>
        ) : hasSearched ? (
          <ResultsGrid
            trains={trains}
            source={searchParams.source}
            destination={searchParams.destination}
          />
        ) : null}
      </section>
    </div>
  );
};

export default Index;
