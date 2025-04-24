package listings.model;

import lombok.Data;
import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
public class Listing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private String imageUrl; // URL to the image stored in S3 or similar
    private Double latitude;
    private Double longitude;
    // Add other relevant fields like category, businessId, etc.
}
