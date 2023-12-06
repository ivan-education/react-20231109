import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./features/restaurant";
import { dishSlice } from "./features/dish";
import { reviewSlice } from "./features/review";
import { userSlice } from "./features/user";

const store = configureStore({
  reducer: {
    restaurant: restaurantSlice.reducer,
    dish: dishSlice.reducer,
    review: reviewSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;

console.log("Store: ", store.getState());

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
