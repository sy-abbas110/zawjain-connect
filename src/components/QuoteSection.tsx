import { Heart } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section className="py-20 bg-warm relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Floral Elements */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Islamic Floral Decoration */}
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              {/* Decorative Dots */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gold rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed mb-8 italic">
            "Marry the single people from among you and the righteous slaves and slave-girls. If 
            you are poor, Allah (SwT) will make you rich through His favour; and Allah (SwT) is 
            Bountiful, All-Knowing." 
            <span className="text-gold font-semibold">(24:32)</span>
          </blockquote>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-secondary"></div>
            <div className="w-8 h-8 border-2 border-secondary rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
            </div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-secondary"></div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-1/4 w-6 h-6 text-secondary/30 animate-float">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-1/4 w-8 h-8 text-primary/20 animate-float" style={{animationDelay: '3s'}}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
    </section>
  );
};

export default QuoteSection;