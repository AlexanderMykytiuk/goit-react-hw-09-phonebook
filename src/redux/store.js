import contactsReducer from './Contacts/contacts-reducer';
import authReducer from './Auth/auth-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// пишем config для persistReducer
const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token']
}

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    autorization: persistReducer(authPersistConfig,authReducer),
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

// возвращаем local storage для хранения токена
let persistor = persistStore(store);
export default { store, persistor };

