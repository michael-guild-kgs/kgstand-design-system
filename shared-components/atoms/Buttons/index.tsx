import React from 'react';

import './button.css';
interface Button {
  variant: ['primary','secondary'],
  size: ['small', 'medium', 'large'],
  label: string,
  onClick: () => {},
};

/**
 * Primary UI component for user interaction
 */
export 
const Button = ({ variant, backgroundColor, size, label, ...props }) => {
  return (
    <button
      type="button"
      className={['kgstand-button', `kgstand-button--${size}`, `kgstand-button--${variant}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
