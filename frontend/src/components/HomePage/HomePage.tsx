import React from 'react';
import LocationPrompt from '../LocationPrompt/LocationPrompt';
import ListingGrid from '../ListingGrid/ListingGrid';
import CategoryFilter from '../CategoryFilter/CategoryFilter';

function HomePage() {
  return (
    <>
      <h1>Find Local Food & Services</h1>
      <p>Discover the best local food and services in your area.</p>
      <LocationPrompt />
      <CategoryFilter />
      <ListingGrid />
    </>
  );
}

export default HomePage;
