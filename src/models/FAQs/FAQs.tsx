export class FAQs {
  question!: string;
  answer!: string;

  constructor(data?: Partial<FAQs>) {
    Object.assign(this, data);
  }

  static fromJson(json: any): FAQs {
    return new FAQs({
      question: json.question,
      answer: json.answer,
    });
  }
}
