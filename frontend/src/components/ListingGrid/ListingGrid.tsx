// Define a type for our listing object
export interface Listing {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  imageUrl?: string;
  latitude?: number;
  longitude?: number;
}

export interface ListingGridProps {
  listings: Listing[];
  loading: boolean;
}

function ListingGrid({ listings, loading }: ListingGridProps) {
  if(loading) {
    return <div>Loading...</div>;
  }

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
