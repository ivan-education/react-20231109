import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
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

const userAdapter = createEntityAdapter<UserEntity>();

export const userSlice = createSlice({
  name: "user",
  initialState: userAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        userAdapter.setMany(state, payload);
        state.status = RequestStatus.FULFILLED;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = RequestStatus.REJECTED;
      });
  },
});
