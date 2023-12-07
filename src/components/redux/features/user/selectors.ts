import { RootState } from "../..";

export const selectUserModule = (state: RootState) => state.user;

export const selectUserIds = (state: RootState) => selectUserModule(state).ids;

export const selectUserById = (state: RootState, id: string) =>
  selectUserModule(state).entities[id];
