package repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import model.Product;

public interface ProductRepository extends ReactiveCrudRepository<Product, Long> {
    Flux<Product> findAll(); // This is already included in ReactiveCrudRepository
}
