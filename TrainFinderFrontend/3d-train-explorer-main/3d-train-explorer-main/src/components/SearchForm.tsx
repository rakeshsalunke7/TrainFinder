import { useState } from 'react';
import { Search, MapPin, Navigation } from 'lucide-react';

interface SearchFormProps {
  onSearch: (source: string, destination: string) => void;
  isLoading: boolean;
}

const SearchForm = ({ onSearch, isLoading }: SearchFormProps) => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (source.trim() && destination.trim()) {
      onSearch(source.trim().toUpperCase(), destination.trim().toUpperCase());
    }
  };

  const swapStations = () => {
    const temp = source;
    setSource(destination);
    setDestination(temp);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="glass-card rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Source Input */}
          <div className="relative flex-1 w-full group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary transition-colors group-focus-within:text-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="From Station (e.g., NDLS)"
              className="w-full glass-input rounded-xl py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              required
            />
            <label className="absolute -top-2.5 left-3 px-2 text-xs font-medium text-primary bg-card rounded">
              Source
            </label>
          </div>

          {/* Swap Button */}
          <button
            type="button"
            onClick={swapStations}
            className="shrink-0 w-12 h-12 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-all hover:scale-110 hover:rotate-180 duration-300"
          >
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>

          {/* Destination Input */}
          <div className="relative flex-1 w-full group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-accent transition-colors group-focus-within:text-accent">
              <Navigation className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="To Station (e.g., BCT)"
              className="w-full glass-input rounded-xl py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
              required
            />
            <label className="absolute -top-2.5 left-3 px-2 text-xs font-medium text-accent bg-card rounded">
              Destination
            </label>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            disabled={isLoading || !source.trim() || !destination.trim()}
            className="shrink-0 btn-primary rounded-xl px-8 py-4 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none font-display font-semibold tracking-wide"
          >
            {isLoading ? (
              <div className="flex gap-1">
                <span className="loader-dot w-2 h-2 bg-primary-foreground rounded-full"></span>
                <span className="loader-dot w-2 h-2 bg-primary-foreground rounded-full"></span>
                <span className="loader-dot w-2 h-2 bg-primary-foreground rounded-full"></span>
              </div>
            ) : (
              <>
                <Search className="w-5 h-5" />
                <span className="hidden sm:inline">Search Trains</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Tips */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          <span className="text-xs text-muted-foreground">Popular routes:</span>
          {[
            { from: 'NDLS', to: 'BCT' },
            { from: 'HWH', to: 'NDLS' },
            { from: 'MAS', to: 'SBC' },
          ].map((route, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setSource(route.from);
                setDestination(route.to);
              }}
              className="px-3 py-1 text-xs rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            >
              {route.from} → {route.to}
            </button>
          ))}
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
