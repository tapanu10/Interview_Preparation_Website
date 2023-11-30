// store/configureStore.js
import { configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to local storage

const persistConfig = {
  key: 'root',
  storage,
  // Add other configuration options if needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [ thunk],
  // Add other options if needed
});

const persistor = persistStore(store);

export { store, persistor };
