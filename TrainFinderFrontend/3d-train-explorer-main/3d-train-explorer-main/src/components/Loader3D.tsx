import { Train } from 'lucide-react';

const Loader3D = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {/* Animated Train */}
      <div className="relative w-64 h-20 mb-8">
        {/* Track */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-border to-transparent rounded-full" />
        <div className="absolute bottom-0 left-0 right-0 train-track h-0.5 opacity-30" />
        
        {/* Train Icon Moving */}
        <div className="absolute bottom-2 animate-train">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <div className="relative w-16 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-glow">
              <Train className="w-8 h-8 text-primary-foreground" />
            </div>
            {/* Wheels */}
            <div className="absolute -bottom-1 left-2 w-3 h-3 bg-secondary rounded-full border-2 border-primary/50" />
            <div className="absolute -bottom-1 right-2 w-3 h-3 bg-secondary rounded-full border-2 border-primary/50" />
          </div>
        </div>

        {/* Track sleepers */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1 h-2 bg-border/50 rounded-sm" />
          ))}
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          Searching Trains
        </h3>
        <div className="flex items-center justify-center gap-1">
          <span className="text-muted-foreground">Finding the best routes</span>
          <span className="flex gap-1 ml-1">
            <span className="loader-dot w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="loader-dot w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="loader-dot w-1.5 h-1.5 bg-primary rounded-full" />
          </span>
        </div>
      </div>

      {/* Shimmer Cards Preview */}
      <div className="w-full max-w-2xl mt-12 grid gap-4">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="glass-card rounded-2xl p-6 animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl shimmer" />
              <div className="flex-1">
                <div className="h-4 w-32 shimmer rounded mb-2" />
                <div className="h-3 w-20 shimmer rounded" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="h-6 w-16 shimmer rounded" />
              <div className="h-4 w-24 shimmer rounded" />
              <div className="h-6 w-16 shimmer rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader3D;
