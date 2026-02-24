export class Product {
  id!: number;
  title!: string;
  price!: number;
  categoryId!: number;
  images!: string[];
  rating!: number;
  discount!: number;
  purchaseCount!: number;
  finalPrice!: number;

  constructor(data: Partial<Product>) {
    Object.assign(this, data);
  }

  static fromJson(json: any): Product {
    const price = json.price ?? 0;
    const discount = json.discount ?? 0;

    return new Product({
      id: json._id ?? json.id ?? "",
      title: json.title ?? "",
      price,
      categoryId: json.categoryId ?? 0,
      images: json.images ?? [],
      rating: json.rating ?? 0,
      discount,
      purchaseCount: json.purchaseCount ?? 0,
      finalPrice: price - (price * discount) / 100,
    });
  }

  get formattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  get formattedFinalPrice() {
    return `$${this.finalPrice.toFixed(2)}`;
  }

  get formattedDiscount() {
    return `-${this.discount}%`;
  }
}
