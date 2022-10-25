import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import { compose, applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage, 
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({reducer: persistedReducer});

export const persistor = persistStore(store);