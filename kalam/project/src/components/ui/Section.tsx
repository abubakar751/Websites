import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
}) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${dark ? 'bg-amber-900 text-amber-50' : 'bg-amber-50 text-amber-950'} ${className}`}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl opacity-80">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;