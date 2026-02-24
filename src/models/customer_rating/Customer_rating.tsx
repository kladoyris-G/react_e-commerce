export class CustomerRating {
  id!: number;
  rating!: number;
  userName!: string;
  isUserValid!: boolean;
  comment!: string;

  constructor(data?: Partial<CustomerRating>) {
    Object.assign(this, data);
  }

  static fromJson(json: any): CustomerRating {
    return new CustomerRating({
      id: json._id,
      rating: json.rating,
      userName: json.user,
      isUserValid: true,
      comment: json.comment,
    });
  }
}
