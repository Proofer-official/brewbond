import React from 'react';
import { Star } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const brands = [
    { name: 'VOGUE', opacity: 0.6 },
    { name: 'ELLE', opacity: 0.5 },
    { name: 'Cosmopolitan', opacity: 0.7 },
    { name: 'GQ', opacity: 0.5 },
    { name: 'Marie Claire', opacity: 0.6 }
  ];

  return (
    <section className="py-20 px-6 bg-white" id="stories">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Brand Logos */}
        <div className="text-center space-y-8">
          <p className="text-brand-coffee/40 font-bold uppercase tracking-widest text-sm">As featured in</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {brands.map((brand, i) => (
              <span key={i} className="text-2xl md:text-3xl font-serif font-bold text-brand-coffee">{brand.name}</span>
            ))}
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="relative bg-brand-beige rounded-[3rem] p-8 md:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
               <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-xl rotate-[-2deg]">
                 <img src="https://picsum.photos/seed/happy_couple_les/600/400" alt="Happy User" className="w-full h-auto object-cover" />
               </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1 text-brand-mocha">
                {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
              </div>
              <blockquote className="text-2xl md:text-4xl font-black text-brand-coffee leading-tight">
                "Brew & Bond 덕분에 저와 비슷한 가치관을 가진 사람을 만났어요. 단순한 가벼운 만남이 아니라, 정말 제 삶을 공유할 수 있는 사람을요."
              </blockquote>
              <div>
                <cite className="not-italic font-bold text-lg text-brand-coffee">- 김민지, 28세 (디자이너)</cite>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};