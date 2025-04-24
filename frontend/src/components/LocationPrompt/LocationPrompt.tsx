// Default, { other, exports}
import React, { useState, useEffect } from 'react';

interface LocationState {
  latitude: number | null,
  longitude: number | null,
  error: string | null
}

export interface LocationPromptProps {
  onLocationUpdate: (location: LocationState) => void;
  onRadiusChange: (radius: number) => void;
  currentRadius: number; // value update while using the comp. after init value from parent was used.
}

const LocationPrompt = ({ onLocationUpdate, onRadiusChange, currentRadius }: LocationPromptProps) => {
  // Hooks
  // result, setter func = <State to be update>
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    error: null
  });

  // local -> value passed from its parent component
  const [localRadius, setLocalRadius] = useState<number>(currentRadius);
  
  useEffect(() => {
    // Check if geolocation is supported
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
          } 
          setLocation(newLocation);
          onLocationUpdate(newLocation);
        },
        (error) => {
          const newLocation = {
            latitude: null,
            longitude: null,
            error: error.message 
          } 
          setLocation(newLocation);
          onLocationUpdate(newLocation);
          alert('Geolocation is not supported by this browser.');
        }
      );
    } else {
      const newLocation = {
        latitude: null, 
        longitude: null, 
        error: 'Geolocation is not supported by this browser.' 
      } 
      setLocation(newLocation);
      onLocationUpdate(newLocation);
      alert('Geolocation is not supported by this browser.');
    }
  }, [onLocationUpdate]);

  // a listener
  const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalRadius(Number(event.target.value)); // local state
    onRadiusChange(Number(event.target.value)); // notifies parent component so their brother (listing) can read its data
  };

  return (
    <React.Fragment>
      <p>Where are you located?</p>
        { location.latitude && location.longitude 
          ? 
            (<p>Latitude: {location.latitude.toFixed(2)}, Longitude: {location.longitude.toFixed(2)}</p>)
          :
            (<p>{ location.error || 'Fetching location ...'}</p>)
        }

      <div>
        <label htmlFor="radius">Search Radius (km):</label>
        <input
          type="number"
          id="radius"
          value={localRadius}
          onChange={handleRadiusChange}
        />
      </div>
    </React.Fragment>
  );
}

export default LocationPrompt;
