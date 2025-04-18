import React from 'react';
import ListingCard from '../ListingCard/ListingCard';

// Define a type for our listing object
interface Listing {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: BigDecimal;
  imageUrl?: string;
  latitude?: number;
  longitude?: number;
}

interface ListingGridProps {
  listings: Listing[];
}

function ListingGrid({ listings }: ListingGridProps) {
  return (
    <div className="listing-grid">
      {listings.map((listing) => (
        <div key={listing.id} className="listing-card">
          {listing.imageUrl && <img src={listing.imageUrl} alt={listing.name} />}
          <h3>{listing.name}</h3>
          <p>{listing.description.substring(0, 50)}...</p>
          <p>Price: ${listing.price}</p>
          <p>Rating: {/* You'll add rating logic later */}</p>
          <button>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default ListingGrid;
