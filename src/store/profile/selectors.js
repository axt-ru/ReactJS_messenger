import { AUTHORS } from "../../constants";

export const selectNameProfile = (state) => state.profile.name || AUTHORS.human;

export const selectAuth = (state) => state.profile.authorized;
export const selectProfileError = (state) => state.profile.error;