import React from 'react';
import GoogleMapReact from 'google-map-react';
import SimpleMapPin from './SimpleMapPin';

const SimpleMap = ({ lat, lng }) => {
  const options = {
    mapTypeControl: true
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
      defaultCenter={{ lat, lng }}
      defaultZoom={14}
      options={options}
    >
      <SimpleMapPin lat={lat} lng={lng} />
    </GoogleMapReact>
  );
};

export default SimpleMap;
