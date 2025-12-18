export class Product {
  id!: number;
  title!: string;
  price!: number;
  categoryId!: number;
  images!: string[];
  rating!: number;
  discount!: number;
  purchaseCount!: number;

  constructor(data: Partial<Product>) {
    Object.assign(this, data);
  }

  get formattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }
}
