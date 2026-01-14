export class Rating {
  rating!: number;
  userName!: string;
  isUserValid!: boolean;
  comment!: string;

  constructor(data?: Partial<Rating>) {
    Object.assign(this, data);
  }
}
