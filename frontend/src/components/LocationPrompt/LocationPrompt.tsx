// Default, { other, exports}
import React, { useState, useEffect } from 'react';
import ListingGrid from '../ListingGrid/ListingGrid';

interface LocationState {
  latitude: number | null,
  longitude: number | null,
  error: string | null
}

function LocationPrompt() {

  // Hooks
  // result, setter func = <State to be update>
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    error: null
  });
  const [radius, setRadius] = useState<number>(5); // default 5km radius
  const [loadingListings, setLoadingListings] = useState<boolean>(false);
  const [listings, setListings] = useState<Listing[]>([]);
  
  useEffect(() => {
    // Check if geolocation is supported
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
          });
        },
        (error) => {
          setLocation({
            latitude: null,
            longitude: null,
            error: error.message
          });

          alert('Geolocation is not supported by this browser.');
        }
      );
    } else {
      setLocation({
        latitude: null,
        longitude: null,
        error: 'Geolocation is not supported by this browser.'
      });

      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if(location.latitude && location.longitude) {
      fetchNearbyListings(location.latitude, location.longitude, radius)
  }, [location, radius]);

  const fetchNearbyListings = async (latitude: number, longitude: number, radius: number) => {
    setLoadingListings(true);
    try {
      const response = await fetch(`http://localhost:8080/api/listings/nearby?latitude=<span class="math-inline">\{latitude\}&longitude\=</span>{longitude}&radius=${searchRadius}`);
      const data = await response.json();
      setListings(data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    } finally {
      setLoadingListings(false);
    }
  };

  // a listener
  const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadius(Number(event.target.value));
  };

  return (
    <React.Fragment>
      <p>Where are you located?</p>
        { location.latitude && location.longitude 
          ? 
            (<p>Latitude: {location.latitude.toFixed(2)}, Longitude: {location.longitude.toFixed(2)}</p>);
          :
            (<p>{ location.error || 'Fetching location ...'}</p>);
        }
      }

      <div>
        <label htmlFor="radius">Search Radius (km):</label>
        <input
          type="number"
          id="radius"
          value={radius}
          onChange={handleRadiusChange}
        />
      </div>
    </React.Fragment>
  );
}

export default LocationPrompt;
