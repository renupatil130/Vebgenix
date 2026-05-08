import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'navbar', onClick, href, type = 'button' }) => {
  const className = `custom-btn custom-btn-${variant}`;
  
  if (href) {
    return (
      <a href={href} className={className} style={{ textDecoration: 'none' }} onClick={onClick}>
        <span className="btn-glow"></span>
        <span className="btn-content">{children}</span>
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      <span className="btn-glow"></span>
      <span className="btn-content">{children}</span>
    </button>
  );
};

export default Button;
