import { Shield, Users, MessageCircle, Star, Heart, CheckCircle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Creating a new profile",
      description: "Easy registration process with comprehensive verification to ensure authentic profiles and genuine intentions.",
      color: "from-primary to-primary-dark"
    },
    {
      icon: Users,
      title: "Key features",
      description: "Advanced matching algorithms, detailed compatibility reports, and privacy-focused communication tools.",
      color: "from-secondary to-primary"
    },
    {
      icon: MessageCircle,
      title: "How niqah works",
      description: "Connect with verified profiles, engage in meaningful conversations, and find your perfect life partner.",
      color: "from-gold to-secondary"
    }
  ];

  const keyFeatures = [
    { text: "Advanced matching algorithms", icon: CheckCircle },
    { text: "Verified profile system", icon: Shield },
    { text: "Privacy-focused messaging", icon: MessageCircle },
    { text: "Family involvement options", icon: Users },
    { text: "Islamic guidance integration", icon: Heart },
    { text: "Global community access", icon: Star }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card-feature group">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold/80 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Call to Action */}
                <div className="mt-6">
                  <button className="text-primary font-semibold hover:text-secondary transition-colors duration-300 flex items-center group">
                    Learn More 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Features List */}
        <div className="bg-gradient-to-br from-surface to-warm rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Key features
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover the comprehensive features that make Zawjain the most trusted platform for Islamic matrimony
              </p>
              
              <div className="space-y-4">
                {keyFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="w-6 h-6 bg-gradient-to-br from-success to-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-200">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Profile Card Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">FM</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">Fatema Binte Malek</h4>
                    <p className="text-muted-foreground">BAN • 1999 • 5'3"</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  "Seeking a practicing Muslim partner who values family, education, and Islamic principles..."
                </div>
                <div className="mt-4 flex space-x-2">
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    Verified
                  </div>
                  <div className="bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
                    Active
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gold/60 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary/60 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;