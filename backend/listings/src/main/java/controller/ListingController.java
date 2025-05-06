package listings.controller;

import listings.model.Listing;
import listings.service.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/listings")
public class ListingController {

    @Autowired
    private ListingService listingService;

    @GetMapping
    public List<Listing> getAllListings() {
        return listingService.getAllListings();
    }

    @GetMapping("/nearby")
    public List<Listing> getNearbyListings(
            @RequestParam double latitude,
            @RequestParam double longitude,
            @RequestParam double radius // in kilometers
    ) {
        return listingService.findListingsNearby(latitude, longitude, radius);
    }

    // Add endpoints for creating, updating, and deleting listings (e.g., POST, PUT, DELETE)
}
