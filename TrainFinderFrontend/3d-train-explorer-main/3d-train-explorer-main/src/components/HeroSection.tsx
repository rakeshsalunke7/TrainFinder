import { Train, Zap, Shield, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Lightning Fast Train Search</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <span className="text-foreground">Find Your</span>
          <br />
          <span className="text-gradient">Perfect Journey</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Search trains across India with real-time schedules, routes, and timings. 
          Experience the future of train travel planning.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
          {[
            { icon: Train, text: 'All Trains' },
            { icon: Clock, text: 'Real-time Data' },
            { icon: Shield, text: 'Reliable' },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 border border-border/50"
            >
              <feature.icon className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Train Track at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent">
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-primary to-transparent animate-train opacity-50" />
      </div>
    </section>
  );
};

export default HeroSection;
