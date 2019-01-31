import React from 'react';
import redMarker from '../../assets/images/red-marker.png';

const SimpleMapPin = () => {
  return (
    <img
      src={redMarker}
      alt="red marker"
      className="red-marker"
      style={{
        height: '48px',
        width: '48px',
        transform: 'translate(-50%, -100%)'
      }}
    />
  );
};

export default SimpleMapPin;
