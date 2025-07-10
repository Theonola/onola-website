import React from 'react'

type ButtonComponentProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  [key: string]: any;
};

const baseClass =
  'inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-[var(--primary-yellow)] text-white hover:bg-primary-dark disabled:opacity-50';

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  href,
  onClick,
  className = '',
  target,
  rel,
  type = 'button',
  ...props
}) => {
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseClass} ${className}`}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;