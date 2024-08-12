import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Використовуємо localStorage
import authReducer from './auth/slice';
import contactsReducer from './contacts/contactsSlice';
import filtersReducer from './filters/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], // Зберігаємо тільки токен
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
