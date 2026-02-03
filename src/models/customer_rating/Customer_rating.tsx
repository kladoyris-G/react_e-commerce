export class CustomerRating {
  id!: number;
  rating!: number;
  userName!: string;
  isUserValid!: boolean;
  comment!: string;

  constructor(data?: Partial<CustomerRating>) {
    Object.assign(this, data);
  }

  static fromApi(api: any): CustomerRating {
    return new CustomerRating({
      id: api._id,
      rating: api.rating,
      userName: api.user,
      isUserValid: true,
      comment: api.comment,
    });
  }
}
