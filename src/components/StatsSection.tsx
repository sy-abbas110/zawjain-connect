import { Users, Heart, CheckCircle, Globe } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "4,512",
      label: "Active Users",
      description: "Verified Profiles"
    },
    {
      icon: Heart,
      number: "1,881",
      label: "Success Stories",
      description: "Happy Marriages"
    },
    {
      icon: CheckCircle,
      number: "2,629",
      label: "Verified Profiles",
      description: "Background Checked"
    },
    {
      icon: Globe,
      number: "190+",
      label: "Countries",
      description: "Global Reach"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Zawjain's user statistics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of Muslims worldwide for finding their perfect life partner
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="card-feature text-center group hover:scale-105 transform transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Number */}
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Decorative Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-3 border border-primary/20">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
            <span className="text-foreground font-medium">Join thousands of satisfied users today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;