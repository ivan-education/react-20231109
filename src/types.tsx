export interface Dish {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

export interface ReviewEntity {
  id: string;
  user: string;
  text: string;
  rating: number;
}

export interface RestaurantEntity {
  id: string;
  name: string;
  menu: Dish[];
  reviews: ReviewEntity[];
}

export type CategoryEntity = Pick<RestaurantEntity, "id" | "name">;
