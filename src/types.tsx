export interface RestaurantEntity {
  id: string;
  name: string;
  description: string;
  img: string;
  menu: string[];
  reviews: string[];
}

export interface DishEntity {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

export interface ReviewEntity {
  id: string;
  userId: string;
  text: string;
  rating: number;
}

export interface UserEntity {
  id: string;
  name: string;
}

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export enum RequestStatus {
  IDLE = "idle",
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

export enum StarType {
  ACTIVE,
  HALF,
  INACTIVE,
}
