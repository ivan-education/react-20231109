import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from "../selectors";
import { RootState } from "src/redux";
import { API_URL } from "src/constants/constants";

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, thunkApi) => {
    const response = await fetch(`${API_URL}/users`);
    const result = await response.json();

    if (!result?.length) {
      return thunkApi.rejectWithValue("No users");
    }
    return result;
  },
  {
    condition: (_, { getState }) =>
      !selectUserIds(getState() as RootState).length,
  }
);
