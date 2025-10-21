export type CardSize = 'small' | 'medium' | 'large' | 'xl';

export interface CardProps {
  children: React.ReactNode;
  size?: CardSize;
  className?: string;
  loading?: boolean;
  error?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}
