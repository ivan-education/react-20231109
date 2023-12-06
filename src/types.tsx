export interface DishEntity {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

export interface ReviewEntityNorm {
  id: string;
  userId: string;
  text: string;
  rating: number;
}

export interface RestaurantEntity {
  id: string;
  name: string;
  menu: DishEntity[];
  reviews: ReviewEntityNorm[];
}

export interface RestaurantEntityNorm {
  id: string;
  name: string;
  menu: string[];
  reviews: string[];
}

export interface UserEntity {
  id: string;
  name: string;
}

export type CategoryEntity = Pick<RestaurantEntity, "id" | "name">;

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}
