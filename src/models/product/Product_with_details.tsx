import { CustomerRating } from "@models/customer_rating/Customer_rating";
import { Product } from "./Product"; // assume you have Product class already

export class ProductWithDetails extends Product {
  customersRatings!: CustomerRating[];
  shortDescription!: string;
  fullDescription!: string;
  sizes!: string[];
  colors!: string[];

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
      customersRatings: ratings,
      shortDescription: json.shortDescription ?? "",
      fullDescription: json.longDescription ?? "",
      sizes: Array.isArray(json.sizes) ? json.sizes : [],
      colors: ["#4F4631", "#314F4A", "#31344F"],
    });
  }
}
