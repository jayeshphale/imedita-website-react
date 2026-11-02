import React from 'react';
import localLogo from '../../assets/imedita-logo.png';

const IMEDITA_LOGO_URL = "https://imeditaoffload.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/02/22090006/imedita-logo.png";

export const ImeditaLogo = ({ className = "", height = 48 }) => {
  return (
    <img 
      src={IMEDITA_LOGO_URL} 
      onError={(e) => {
        // Fallback to locally cached asset if network is offline
        e.currentTarget.src = localLogo;
      }}
      alt="I-MEDITA - Training | Development | Placement" 
      height={height}
      className={`imedita-brand-logo ${className}`}
      style={{
        height: `${height}px`,
        width: 'auto',
        display: 'block',
        objectFit: 'contain'
      }}
    />
  );
};
