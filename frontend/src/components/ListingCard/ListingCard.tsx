interface ListingCardProps {
  listing: {
    id: number;
    name: string;
    description: string;
    rating: number;
    image?: string;
  };
}

function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="listing-card">
      {listing.image && <img src={listing.image} alt={listing.name} />}
      <h3>{listing.name}</h3>
      <p>{listing.description.substring(0, 50)}...</p>
      <p>Rating: {listing.rating}</p>
      <button>View Details</button> {/* You'll add navigation here */}
    </div>
  );
}

export default ListingCard;
