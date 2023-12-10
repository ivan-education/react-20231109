import { createSlice } from "@reduxjs/toolkit";
import { RequestStatus, UserEntity } from "src/types";
import { getUsers } from "./thunks/get-users";

interface UserAccType {
  [key: string]: UserEntity;
}

interface UserState {
  entities: UserAccType;
  ids: string[];
  status: RequestStatus;
}

const initialState: UserState = {
  entities: {} as UserAccType,
  ids: [] as string[],
  status: RequestStatus.IDLE,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.entities = (payload as UserEntity[]).reduce(
          (acc: UserAccType, user: UserEntity) => {
            acc[user.id] = user;
            return acc;
          },
          {} as UserAccType
        );

        state.ids = (payload as UserEntity[]).map(({ id }) => id);
        state.status = RequestStatus.FULFILLED;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = RequestStatus.REJECTED;
      });
  },
});
