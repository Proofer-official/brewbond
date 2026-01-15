import React from 'react';
import { Button } from './Button';
import { Coffee, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-coffee relative overflow-hidden pt-20">
      {/* Curved Top Background Decorative */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-brand-coffee transform -translate-y-1/2 scale-110 rounded-b-[100%] z-0"></div>

      {/* Main CTA Section */}
      <div className="relative z-10 px-6 pb-24 text-center">
         <div className="max-w-4xl mx-auto bg-brand-pink rounded-[3rem] p-12 md:p-20 shadow-2xl transform -translate-y-12">
            <h2 className="text-4xl md:text-6xl font-black text-brand-coffee mb-8 leading-tight">
              당신의 반쪽을 찾을 <br/>준비가 되셨나요?
            </h2>
            <p className="text-xl text-brand-coffee/80 mb-10 max-w-xl mx-auto font-medium">
              지금 바로 사전 등록하고, Brew & Bond의 런칭 멤버가 되어보세요. 
              특별한 혜택이 기다리고 있습니다.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
              <input 
                type="text" 
                placeholder="이메일 주소를 입력하세요" 
                className="flex-grow px-6 py-4 rounded-full border-2 border-brand-coffee/10 bg-white/90 text-brand-coffee placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-coffee"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                무료 가입하기
              </Button>
            </div>
         </div>
      </div>

      {/* Links & Legal */}
      <div className="max-w-7xl mx-auto px-6 pb-12 text-brand-beige/60">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-brand-beige">
              <Coffee size={24} />
              <span className="text-2xl font-bold">Brew & Bond</span>
            </div>
            <p className="max-w-xs">
              진지한 관계를 위한 프리미엄 레즈비언 데이팅 플랫폼. 
              우리는 모든 사랑이 존중받는 세상을 꿈꿉니다.
            </p>
            <div className="flex gap-4 pt-4">
               <a href="#" className="hover:text-brand-pink transition-colors"><Instagram /></a>
               <a href="#" className="hover:text-brand-pink transition-colors"><Twitter /></a>
               <a href="#" className="hover:text-brand-pink transition-colors"><Facebook /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-beige mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-pink">About Us</a></li>
              <li><a href="#" className="hover:text-brand-pink">Careers</a></li>
              <li><a href="#" className="hover:text-brand-pink">Blog</a></li>
              <li><a href="#" className="hover:text-brand-pink">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-beige mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-pink">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-pink">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-pink">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-pink">Safety Tips</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-beige/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2024 Brew & Bond Inc. All rights reserved.</p>
          <div className="flex gap-4">
             <img src="https://picsum.photos/seed/flag1/40/30" className="rounded opacity-50 grayscale hover:grayscale-0 transition-all" alt="Country" />
             <img src="https://picsum.photos/seed/flag2/40/30" className="rounded opacity-50 grayscale hover:grayscale-0 transition-all" alt="Country" />
          </div>
        </div>
      </div>
    </footer>
  );
};