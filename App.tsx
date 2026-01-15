import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureSplit } from './components/FeatureSplit';
import { FeatureGrid } from './components/FeatureGrid';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-beige overflow-x-hidden selection:bg-brand-pink selection:text-brand-coffee">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Feature Section 1: Connection */}
        <FeatureSplit 
          title="단순한 매칭이 아닌, 마음의 연결"
          subtitle="Connect with meaning"
          description="Brew & Bond는 사진 한 장으로 판단하는 것을 원치 않습니다. 프로필에 담긴 당신의 이야기와 취향을 통해 진정한 대화를 시작해보세요."
          imageSrc="https://picsum.photos/seed/phone_app_mockup_1/600/800"
          bgColor="bg-brand-coffee"
          textColor="text-brand-beige"
          ctaText="앱 미리보기"
          accentColor="bg-brand-mocha"
        />

        {/* Feature Section 2: Customization (Linktree Style Grid) */}
        <FeatureGrid />

        {/* Feature Section 3: Lifestyle */}
        <FeatureSplit 
          title="당신의 라이프스타일을 공유하세요"
          subtitle="Share your world"
          description="좋아하는 카페, 주말 취미, 최근에 읽은 책... 당신을 표현하는 모든 것이 매력적인 대화의 주제가 됩니다. 인스타그램이나 블로그를 연동하여 매력을 뽐내보세요."
          imageSrc="https://picsum.photos/seed/lifestyle_woman_1/600/800"
          bgColor="bg-[#EAD4D8]" /* Soft muted pink/beige */
          textColor="text-brand-coffee"
          reversed={true}
          ctaText="프로필 꾸미기"
          accentColor="bg-brand-pink"
        />
        
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;