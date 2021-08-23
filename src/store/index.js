import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { chatsReducer } from './chats/reducer';
import { profileReducer } from './profile/reducer';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { articlesReducer } from "./blog/reducer";
import { middleware } from "./middlewares";
import { messagesReducer } from "./messages/reducer";

const persistConfig = {
    key: 'MyApp-Storage',
    storage,
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    articles: articlesReducer,
    messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const saveInStorage = persistStore(store);