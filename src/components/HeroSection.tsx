import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    lookingFor: '',
    maritalStatus: '',
    location: ''
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Islamic couple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find a religious partner
            <br />
            <span className="text-secondary">of your choice</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            We made it easy for you to get your life partner in your location
          </p>

          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {/* Looking For */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground block text-left">
                  I'm looking for
                </label>
                <Select value={searchData.lookingFor} onValueChange={(value) => 
                  setSearchData({...searchData, lookingFor: value})
                }>
                  <SelectTrigger className="h-12 bg-input border-border">
                    <SelectValue placeholder="Female & Biodota" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female & Biodota</SelectItem>
                    <SelectItem value="male">Male & Biodota</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Marital Status */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground block text-left">
                  Marital Status
                </label>
                <Select value={searchData.maritalStatus} onValueChange={(value) => 
                  setSearchData({...searchData, maritalStatus: value})
                }>
                  <SelectTrigger className="h-12 bg-input border-border">
                    <SelectValue placeholder="Never Married" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never-married">Never Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground block text-left">
                  Location
                </label>
                <Input 
                  placeholder="Where are you looking for?"
                  className="h-12 bg-input border-border"
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                />
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button className="btn-search w-full h-12 font-semibold">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
    </section>
  );
};

export default HeroSection;