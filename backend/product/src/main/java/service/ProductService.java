package service;

import model.Product;
import repository.ProductRepository;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import reactor.core.publisher.Flux;
import java.math.BigDecimal;

@Service
public class ProductService {
  private ProductRepository productRepository;

  public Flux<Product> getProductOffer() {
    return productRepository.findAll();
  }

  // Method to find listings nearby (initially a simple bounding box)
  public List<Product> findProductsNearby(double latitude, double longitude, double radius) {
    Product dummyProduct = new Product();
    dummyProduct.setId(1L);
    dummyProduct.setName("Dummy Product");
    dummyProduct.setDescription("This is a dummy product");
    dummyProduct.setPrice(BigDecimal.valueOf(9.99));
    dummyProduct.setImageUrl("s3.fakeurl.com");
    return List.of(dummyProduct);
    // Simple bounding box calculation (not geographically accurate for larger
    // distances)
    // double latDiff = radius / 111.12; // Approximate km to degrees latitude
    // double lonDiff = radius / (111.320 * Math.cos(Math.toRadians(latitude))); //
    // Approximate km to degrees longitude
    //
    // double minLatitude = latitude - latDiff;
    // double maxLatitude = latitude + latDiff;
    // double minLongitude = longitude - lonDiff;
    // double maxLongitude = longitude + lonDiff;

    // return productRepository.findProductsNearby(minLatitude, maxLatitude,
    // minLongitude, maxLongitude);
    // For production, consider using PostGIS or more sophisticated spatial queries
  }

  // Add methods for creating, updating, and deleting listings
}
