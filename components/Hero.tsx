import React from 'react';
import { Button } from './Button';
import { ArrowRight, Sparkles, Coffee } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-brand-pink/30 px-4 py-2 rounded-full text-brand-coffee font-bold text-sm">
            <Sparkles size={16} />
            <span>새로운 레즈비언 데이팅의 기준</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-brand-coffee tracking-tight">
            커피 한잔으로<br/>
            <span className="text-brand-mocha">시작하는 대화.</span>
          </h1>
          
          <p className="text-xl text-brand-coffee/70 max-w-lg leading-relaxed">
            단순한 스와이프 그 이상. 진지한 만남과 따뜻한 유대감을 원하는 당신을 위한 공간입니다. Brew & Bond에서 당신의 이야기를 시작하세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="name@example.com" 
                className="w-full h-full px-6 py-4 rounded-full border-2 border-brand-coffee/10 bg-white focus:border-brand-coffee focus:outline-none text-brand-coffee placeholder:text-gray-400"
              />
            </div>
            <Button variant="primary" className="whitespace-nowrap">
              사전 등록하기
            </Button>
          </div>
          
          <p className="text-sm text-brand-coffee/50 pl-2">
            * 런칭 알림을 가장 먼저 받아보세요. 스팸은 보내지 않습니다.
          </p>
        </div>

        {/* Right Visual */}
        <div className="relative order-1 lg:order-2 group">
          <div className="absolute inset-0 bg-brand-pink rounded-[3rem] rotate-3 transform transition-transform group-hover:rotate-6"></div>
          <div className="relative rounded-[3rem] overflow-hidden border-4 border-brand-coffee shadow-2xl bg-brand-coffee">
            {/* Using a placeholder image that fits the "Coffee & Date" vibe */}
            <img 
              src="https://picsum.photos/seed/coffee_date_123/800/1000" 
              alt="Happy couple having coffee" 
              className="w-full h-[600px] object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
            
            {/* Floating Card Overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-white/20">
               <div className="flex items-center gap-4">
                 <img src="https://picsum.photos/seed/profile55/100/100" className="w-12 h-12 rounded-full border-2 border-brand-pink" alt="Profile" />
                 <div>
                   <p className="font-bold text-brand-coffee">지민 & 수진</p>
                   <p className="text-xs text-gray-500">대화 시작한 지 3일째</p>
                 </div>
                 <div className="ml-auto bg-brand-beige p-2 rounded-full">
                   <Coffee size={20} className="text-brand-mocha" />
                 </div>
               </div>
               <div className="mt-4 bg-brand-beige/50 p-3 rounded-xl text-sm text-brand-coffee/80 italic">
                 "가벼운 만남보다 깊이 있는 대화가 필요했어요."
               </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};