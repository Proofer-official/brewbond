import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Brew & Bond는 어떤 사람들을 위한 앱인가요?",
      answer: "진지한 연애를 지향하는 레즈비언 여성을 위한 공간입니다. 가벼운 만남보다는 취향과 가치관이 통하는 깊이 있는 관계를 원하는 분들에게 최적화되어 있습니다."
    },
    {
      question: "신원 인증은 어떻게 이루어지나요?",
      answer: "안전한 커뮤니티를 위해 전화번호 인증 및 선택적인 신분증/직장 인증을 제공합니다. 모든 프로필은 24시간 내 관리자가 직접 검수하여 허위 계정을 차단합니다."
    },
    {
      question: "무료로 이용할 수 있나요?",
      answer: "네, 기본적인 가입, 프로필 열람, 매칭은 무료입니다. 더 많은 분들에게 호감을 표시하거나 프리미엄 필터를 사용하려면 멤버십 구독이 필요할 수 있습니다."
    },
    {
      question: "매칭 알고리즘은 어떻게 작동하나요?",
      answer: "단순한 외모나 거리 기반이 아닌, 가입 시 작성하는 라이프스타일, 취미, 연애 가치관 답변을 분석하여 가장 잘 맞는 상대를 추천해 드립니다."
    },
    {
      question: "지인 차단 기능이 있나요?",
      answer: "물론입니다. 연락처 동기화를 통해 아는 사람에게는 내 프로필이 노출되지 않도록 설정할 수 있어 프라이버시를 안전하게 지킬 수 있습니다."
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-coffee text-brand-beige" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
          궁금한 점이 <br/>있으신가요?
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-brand-beige/5 border border-brand-beige/10 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-bold">{faq.question}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              
              <div 
                className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
              >
                <p className="text-lg text-brand-beige/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};