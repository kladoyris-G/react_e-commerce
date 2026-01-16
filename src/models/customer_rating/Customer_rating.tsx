export class CustomerRating {
  id!: number;
  rating!: number;
  userName!: string;
  isUserValid!: boolean;
  comment!: string;

  constructor(data?: Partial<CustomerRating>) {
    Object.assign(this, data);
  }
}
