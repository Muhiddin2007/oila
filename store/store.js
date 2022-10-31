import {configureStore} from '@reduxjs/toolkit';
import mainSliceReducer from '../features/counterSlice';

const store = configureStore({
  reducer: {credit: mainSliceReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
