import React from 'react';
import './BentoGrid.css';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
  return (
    <div className={`portfolio-grid ${className}`}>
      {children}
    </div>
  );
};
