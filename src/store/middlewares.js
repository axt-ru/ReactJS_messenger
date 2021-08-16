// import { sendMessage } from "./chats/actions";
// import { AUTHORS } from "../constants";
// import { SEND_MESSAGE } from "./chats/actionType";

// export const middleware = (store) => (next) => (action) => {
//     if (action.type === SEND_MESSAGE && action.payload.message.author !== AUTHORS.robot) 
//     {
//         setTimeout(() => {
//             store.dispatch(
//                 sendMessage(action.payload.chatId, {
//                     text: " ",
//                     author: AUTHORS.robot,
//                 })
//             );
//         }, 1200);
//     }
//     return next(action);
// };