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
    data.finalPrice = data.price! - (data.price! * (data.discount ?? 0)) / 100;
    Object.assign(this, data);
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
