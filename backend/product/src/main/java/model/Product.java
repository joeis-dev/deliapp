package model;

import java.math.BigDecimal;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("product")
public class Product {
  @Id
  private Long id;
  private String name;
  private String description;
  private BigDecimal price;
  private String imageUrl; // URL to the image stored in S3 or similar

  // this is not part of the food entity
  // private Double latitude;
  // private Double longitude;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public BigDecimal getPrice() {
    return price;
  }

  public void setPrice(BigDecimal price) {
    this.price = price;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }

  // public Double getLatitude() {
  // return latitude;
  // }
  //
  // public void setLatitude(Double latitude) {
  // this.latitude = latitude;
  // }
  //
  // public Double getLongitude() {
  // return longitude;
  // }
  //
  // public void setLongitude(Double longitude) {
  // this.longitude = longitude;
  // }

}
