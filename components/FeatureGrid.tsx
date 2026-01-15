import React from 'react';
import { ShieldCheck, HeartHandshake, MessageCircleHeart, Users } from 'lucide-react';
import { FeatureCard } from '../types';

export const FeatureGrid: React.FC = () => {
  const cards: FeatureCard[] = [
    {
      title: "철저한 신원 인증",
      description: "허위 프로필 없는 안전한 만남을 위해 3단계 인증 시스템을 도입했습니다.",
      icon: <ShieldCheck size={40} />,
      bgColor: "bg-[#D4E09B]", // Soft Green
      textColor: "text-[#2A3C24]"
    },
    {
      title: "취향 기반 매칭",
      description: "커피 취향부터 인생의 가치관까지. 당신과 꼭 맞는 사람을 찾아드립니다.",
      icon: <HeartHandshake size={40} />,
      bgColor: "bg-brand-pink",
      textColor: "text-brand-coffee"
    },
    {
      title: "깊이 있는 대화",
      description: "가벼운 '안녕' 대신, 서로를 알아갈 수 있는 아이스브레이킹 질문을 제공합니다.",
      icon: <MessageCircleHeart size={40} />,
      bgColor: "bg-brand-coffee",
      textColor: "text-brand-beige"
    },
    {
      title: "오프라인 모임",
      description: "온라인을 넘어, 안전하고 즐거운 오프라인 커뮤니티 모임을 주최합니다.",
      icon: <Users size={40} />,
      bgColor: "bg-[#A7C5EB]", // Soft Blue
      textColor: "text-[#1A2C42]"
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-beige" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-4xl lg:text-5xl font-black text-brand-coffee">
             진지한 만남을 위한 <br/><span className="text-brand-mocha">완벽한 준비</span>
           </h2>
           <p className="text-xl text-brand-coffee/60">당신의 소중한 인연을 위해 세심하게 설계했습니다.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`${card.bgColor} ${card.textColor || 'text-brand-coffee'} p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[300px] transition-transform hover:-translate-y-2 duration-300 shadow-xl`}
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-3xl font-bold tracking-tight">{card.title}</h3>
              </div>
              <p className="text-lg font-medium opacity-90 leading-relaxed mt-8">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};