import { useState, useEffect } from 'react';
import LocationPrompt from '../LocationPrompt/LocationPrompt';
import ListingGrid, { Listing } from '../ListingGrid/ListingGrid';
import CategoryFilter from '../CategoryFilter/CategoryFilter';

function HomePage() {
  const [location, setLocation] = useState<{ 
    latitude: number | null, longitude: number | null, error: string | null 
  }>({
    latitude: null, longitude: null, error: null
  });
  const [radius, setRadius] = useState<number>(5);
  const [loadingListings, setLoadingListings] = useState<boolean>(false);
  const [listings, setListings] = useState<Listing[]>([]);

  const fetchNearbyListings = async (latitude: number, longitude: number, radius: number) => {
    setLoadingListings(true);
    try {
      const response = await fetch (`http://localhost:8080/api/listings/nearby?latitude=${latitude}&longitude=${longitude}&radius=${radius}`);
      const result = await response.json();
      setListings(result);
    } catch (error: any) {
      console.error('Error fetching listings:', error.message);
    } finally {
      setLoadingListings(false);
    }
  };

  const handleLocationUpdate = (newLocation: { latitude: number | null; longitude: number | null; error: string | null }) => {
    setLocation(newLocation);
  };

  const handleRadiusChange = (newRadius: number) => {
    setRadius(newRadius);
  };

  useEffect(() => {
    if (location.latitude && location.longitude) {
      fetchNearbyListings(location.latitude, location.longitude, radius);
    }
  }, [location, radius]);

  return (
    <div>
      <h1>Find Local Food & Services</h1>
      <LocationPrompt
        onLocationUpdate={handleLocationUpdate}
        onRadiusChange={handleRadiusChange}
        currentRadius={radius}
      />
      <CategoryFilter />
      <ListingGrid listings={listings} loading={loadingListings} />
    </div>
  );
}

export default HomePage
