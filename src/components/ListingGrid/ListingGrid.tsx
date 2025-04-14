import React from 'react';
import ListingCard from '../ListingCard/ListingCard';

// Define a type for our listing object
interface Listing {
  id: number;
  name: string;
  description: string;
  rating: number;
  image?: string; // Optional image property
}

function ListingGrid() {
  // In a real app, you'd fetch and map data here
  const listings: Listing[] = [
    { id: 1, name: 'Delicious Pizza', description: 'Best pizza in town!', rating: 4.5, image: '...' },
    { id: 2, name: 'Quick Plumbing', description: 'Reliable plumbing services', rating: 4.8 }, // Image is optional
    // ... more listings
  ];

  return (
    <div className="listing-grid">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}

export default ListingGrid;
