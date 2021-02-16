import React from 'react';

import './button.css';
interface Button {
  primary: Boolean,
  backgroundColor: string,
  size: ['small', 'medium', 'large','whatever'],
  label: string,
  onClick: () => {},
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
