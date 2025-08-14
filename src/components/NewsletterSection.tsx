import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription for:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Our newsletter
                  </h2>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Stay updated with success stories, Islamic marriage guidance, and platform updates. 
                  Join our community of marriage-minded Muslims.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-foreground">Weekly success stories</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Islamic marriage guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground">Platform updates & features</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Newsletter Form */}
              <div className="relative">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 pr-32 bg-background border-2 border-border focus:border-primary text-lg"
                      required
                    />
                    <Button 
                      type="submit"
                      className="absolute right-2 top-2 h-10 px-6 bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Subscribe
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-gold to-secondary rounded-full animate-float opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-primary to-gold rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
    </section>
  );
};

export default NewsletterSection;