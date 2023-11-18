interface MenuItem {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

interface Review {
  id: string;
  user: string;
  text: string;
  rating: number;
}

interface Restaurant {
  id: string;
  name: string;
  menu: MenuItem[];
  reviews: Review[];
}

type Category = Pick<Restaurant, "id" | "name">;
