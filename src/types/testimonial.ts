export type Testimonial = {
  quote: string;
  name: string;
  avatar: string;
  rating: number;
};

export type TestimonialRows = {
  row1: Testimonial[];
  row2: Testimonial[];
  row3: Testimonial[];
};
