import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuoteSection from '@/components/QuoteSection';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import HowNikahWorksSection from '@/components/HowNikahWorksSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <QuoteSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <HowNikahWorksSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
