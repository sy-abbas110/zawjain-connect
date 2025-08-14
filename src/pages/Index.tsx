import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuoteSection from '@/components/QuoteSection';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import NewsletterSection from '@/components/NewsletterSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <QuoteSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;
