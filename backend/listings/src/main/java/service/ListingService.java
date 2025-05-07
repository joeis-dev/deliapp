package listings.service;

import listings.model.Listing;
import listings.repository.ListingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListingService {

    @Autowired
    private ListingRepository listingRepository;

    public List<Listing> getAllListings() {
        return listingRepository.findAll();
    }

    // Method to find listings nearby (initially a simple bounding box)
    public List<Listing> findListingsNearby(double latitude, double longitude, double radius) {
        // Simple bounding box calculation (not geographically accurate for larger distances)
        double latDiff = radius / 111.12; // Approximate km to degrees latitude
        double lonDiff = radius / (111.320 * Math.cos(Math.toRadians(latitude))); // Approximate km to degrees longitude

        double minLatitude = latitude - latDiff;
        double maxLatitude = latitude + latDiff;
        double minLongitude = longitude - lonDiff;
        double maxLongitude = longitude + lonDiff;

        return listingRepository.findBusinessInThisSquaredArea(
                minLatitude, maxLatitude, minLongitude, maxLongitude
        );
        // For production, consider using PostGIS or more sophisticated spatial queries
    }

    // Add methods for creating, updating, and deleting listings
}
