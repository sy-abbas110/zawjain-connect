import { UserPlus, Search, MessageCircle, Heart } from 'lucide-react';
import coupleIllustration from '@/assets/couple-illustration.png';

const HowNikahWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Biodata",
      description: "You can easily create a biodata on Nikah completely free of cost within some steps.",
      position: "top-left",
      badge: "01",
      color: "pink"
    },
    {
      icon: Search,
      title: "Search Biodata", 
      description: "You can easily search biodata using many filters including age, profession, educational qualification, marital and more.",
      position: "bottom-left",
      badge: "02", 
      color: "purple"
    },
    {
      icon: MessageCircle,
      title: "Contact with Guardians",
      description: "If someone likes your biodata or you like someone's biodata, you can directly contact their parents.",
      position: "top-right",
      badge: "03",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Get Married",
      description: "If you like the biodata and if the conversation is well, do your own inquiry & get married according to sunnah.",
      position: "bottom-right", 
      badge: "04",
      color: "pink"
    }
  ];

  const getStepClasses = (position: string) => {
    const baseClasses = "absolute w-72 text-left";
    switch (position) {
      case "top-left":
        return `${baseClasses} top-8 left-8`;
      case "bottom-left":
        return `${baseClasses} bottom-8 left-8`;
      case "top-right":
        return `${baseClasses} top-8 right-8`;
      case "bottom-right":
        return `${baseClasses} bottom-8 right-8`;
      default:
        return baseClasses;
    }
  };

  const getBadgeClasses = (color: string) => {
    return color === "pink" 
      ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white"
      : "bg-gradient-to-r from-purple-500 to-purple-600 text-white";
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How nikah works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A very easy & step process to find your partner
          </p>
        </div>

        {/* Main Content Area */}
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile View - Stack vertically */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-primary/10">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold ${getBadgeClasses(step.color)}`}>
                      {step.badge}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                        <Icon className="w-5 h-5 text-primary" />
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop View - Positioned around illustration */}
          <div className="hidden lg:block">
            <div className="relative min-h-[600px] flex items-center justify-center">
              
              {/* Steps positioned around the illustration */}
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className={getStepClasses(step.position)}>
                    {/* Badge */}
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mb-3 ${getBadgeClasses(step.color)}`}>
                      {step.badge}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                      <Icon className="w-5 h-5 text-primary" />
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                );
              })}

              {/* Central Illustration */}
              <div className="relative z-10">
                <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-green-100/50 rounded-full"></div>
                  
                  {/* Couple illustration */}
                  <div className="relative z-10 flex items-end justify-center pb-8">
                    <img 
                      src={coupleIllustration} 
                      alt="Islamic couple illustration" 
                      className="w-64 h-64 object-contain filter drop-shadow-lg"
                    />
                  </div>

                  {/* Floating hearts and decorative elements */}
                  <div className="absolute top-12 left-16 w-3 h-3 bg-pink-300 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute top-20 right-20 w-2 h-2 bg-green-300 rounded-full opacity-50 animate-pulse delay-300"></div>
                  <div className="absolute bottom-16 left-12 w-2 h-2 bg-purple-300 rounded-full opacity-40 animate-pulse delay-700"></div>
                  <div className="absolute bottom-20 right-16 w-3 h-3 bg-pink-200 rounded-full opacity-50 animate-pulse delay-500"></div>
                  
                  {/* Small decorative plants/leaves */}
                  <div className="absolute bottom-8 left-8 text-green-400 opacity-60">
                    🌿
                  </div>
                  <div className="absolute bottom-12 right-12 text-green-400 opacity-60">
                    🌿
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground">Ready to find your life partner?</h3>
            <p className="text-muted-foreground max-w-md">
              Join thousands of Muslims who have found meaningful relationships through our platform
            </p>
            <button className="btn-hero mt-4 group flex items-center gap-2">
              Start Your Journey
              <Heart className="w-5 h-5 group-hover:text-red-300 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowNikahWorksSection;