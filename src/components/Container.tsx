import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

export default function Container({ children, className = '', fluid = false }: ContainerProps) {
  return (
    <div 
      className={`mx-auto px-4 sm:px-6 md:px-8 ${fluid ? 'w-full' : 'max-w-7xl'} ${className}`}
    >
      {children}
    </div>
  );
}