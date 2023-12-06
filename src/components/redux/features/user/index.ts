import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "src/constants/normalized-mock";
import { UserEntity } from "src/types";

interface UserAccType {
  [key: string]: UserEntity;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: normalizedUsers.reduce((acc: UserAccType, user: UserEntity) => {
      acc[user.id] = user;
      return acc;
    }, {} as UserAccType),
    ids: [],
  },
  reducers: {},
});
