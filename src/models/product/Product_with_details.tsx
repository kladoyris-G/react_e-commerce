import { CustomerRating } from "@models/customer_rating/Customer_rating";
import { Product } from "./Product"; // assume you have Product class already

export class ProductWithDetails extends Product {
  ratings!: CustomerRating[];

  constructor(data: Partial<ProductWithDetails>) {
    super(data); // call Product constructor
    Object.assign(this, data); // assign ratings
  }

  static fromJson(json: any): ProductWithDetails {
    const product = Product.fromJson(json); // reuse base Product factory

    const ratings: CustomerRating[] = Array.isArray(json.reviews)
      ? json.reviews.map((review: any) => CustomerRating.fromJson(review))
      : [];

    return new ProductWithDetails({
      ...product, // spread all Product fields
      ratings,
    });
  }
}
