import React from 'react';
import GoogleMapReact from 'google-map-react';
import SimpleMapPin from './SimpleMapPin';

const SimpleMap = ({ lat, lng }) => {
  const options = {
    mapTypeControl: true
  };

  const aquireGoogleMapsKey = () => {
    if (process.env.NODE_ENV === 'development') {
      return process.env.REACT_APP_GOOGLE_MAPS_KEY;
    } else if (process.env.NODE_ENV === 'production') {
      return process.env.GOOGLE_MAPS_KEY;
    }
  };

  console.log(process.env.GOOGLE_MAPS_KEY);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: aquireGoogleMapsKey() }}
      defaultCenter={{ lat, lng }}
      defaultZoom={14}
      options={options}
    >
      <SimpleMapPin lat={lat} lng={lng} />
    </GoogleMapReact>
  );
};

export default SimpleMap;
