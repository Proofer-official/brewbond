import React from 'react';
import { Button } from './Button';

interface FeatureSplitProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  bgColor: string;
  textColor?: string;
  reversed?: boolean;
  ctaText?: string;
  accentColor?: string;
}

export const FeatureSplit: React.FC<FeatureSplitProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  bgColor,
  textColor = 'text-brand-coffee',
  reversed = false,
  ctaText = "자세히 알아보기",
  accentColor = "bg-brand-pink"
}) => {
  return (
    <section className={`py-24 px-6 ${bgColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Content Side */}
        <div className={`space-y-6 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <h2 className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight ${textColor}`}>
            {title}
          </h2>
          <h3 className={`text-2xl font-bold opacity-80 ${textColor}`}>
            {subtitle}
          </h3>
          <p className={`text-lg opacity-70 leading-relaxed max-w-lg ${textColor}`}>
            {description}
          </p>
          <div className="pt-4">
             <Button variant={bgColor.includes('coffee') ? 'primary' : 'secondary'}>
               {ctaText}
             </Button>
          </div>
        </div>

        {/* Image Side */}
        <div className={`relative ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${accentColor} rounded-full blur-3xl opacity-30`}></div>
           <div className="relative">
             <img 
               src={imageSrc} 
               alt={title} 
               className="rounded-[2.5rem] shadow-2xl w-full max-w-md mx-auto transform hover:scale-[1.02] transition-transform duration-500 border-8 border-white/10"
             />
           </div>
        </div>

      </div>
    </section>
  );
};