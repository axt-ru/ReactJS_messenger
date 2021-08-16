import { AUTHORS } from "../../constants";

export const selectChatsHome = (state) => state.chats;

export const selectNameHome = (state) => state.profile.name || AUTHORS.human;
