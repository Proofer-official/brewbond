import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95";
  
  const variants = {
    primary: "bg-brand-pink text-brand-coffee hover:bg-brand-darkPink hover:shadow-lg",
    secondary: "bg-brand-coffee text-brand-beige hover:bg-black hover:shadow-lg",
    outline: "border-2 border-brand-coffee text-brand-coffee hover:bg-brand-coffee hover:text-brand-beige",
    dark: "bg-black text-white hover:bg-gray-800"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};