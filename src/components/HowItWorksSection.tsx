import { UserPlus, Search, MessageCircle, Heart } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Biodata",
      description: "Sign up and create your detailed Islamic profile with verification",
      step: "01"
    },
    {
      icon: Search,
      title: "Search Biodata", 
      description: "Browse verified profiles using advanced filters and preferences",
      step: "02"
    },
    {
      icon: MessageCircle,
      title: "Connect with Guardians",
      description: "Initiate respectful conversations through family involvement",
      step: "03"
    },
    {
      icon: Heart,
      title: "Get Married",
      description: "Build meaningful relationships that lead to beautiful marriages",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How zawjain works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, respectful process designed according to Islamic principles for finding your life partner
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <svg className="w-full h-8" viewBox="0 0 800 32" fill="none">
              <path 
                d="M50 16 L250 16 L250 16 L450 16 L450 16 L650 16 L650 16 L750 16" 
                stroke="url(#gradient)" 
                strokeWidth="2" 
                strokeDasharray="8,4"
                className="animate-pulse"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="50%" stopColor="hsl(var(--secondary))" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center shadow-md">
                      <span className="text-xs font-bold text-gold-foreground">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="mt-6 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center space-y-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-primary/10">
              <h3 className="text-2xl font-bold text-foreground">Ready to start your journey?</h3>
              <p className="text-muted-foreground max-w-md">
                Join thousands of Muslims who have found their perfect match through Zawjain
              </p>
              <button className="btn-hero mt-4 group">
                Start Your Journey
                <Heart className="w-5 h-5 ml-2 group-hover:text-red-300 transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;