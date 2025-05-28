package controller;

import model.Product;
import service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/product")
public class ProductController {

  @Autowired
  private ProductService productService;

  @GetMapping("/all")
  public Flux<Product> getProductOffer() {
    return productService.getProductOffer();
  }

  @GetMapping("/nearby")
  public List<Product> getNearbyProductOffer(
      @RequestParam double latitude,
      @RequestParam double longitude,
      @RequestParam double radius // in kilometers
  ) {
    return productService.findProductsNearby(latitude, longitude, radius);
  }

  // Add endpoints for creating, updating, and deleting listings (e.g., POST, PUT,
  // DELETE)
}
