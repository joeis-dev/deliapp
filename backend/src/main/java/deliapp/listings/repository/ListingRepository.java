package deliapp.listings.repository;

import com.example.listings.model.Listing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListingRepository extends JpaRepository<Listing, Long> {
  // You can add custom query methods here, e.g.,
  List<Listing> findByLatitudeAndLongitude(
          double minLatitude, double maxLatitude, double minLongitude, double maxLongitude
  );
  // For radius-based search, you'd typically use a more complex query or PostGIS functions
}
