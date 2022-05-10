import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers/index';

const store = configureStore({
  reducer: reducer,
})

store.subscribe(() => {
  console.log("store changed!");
})

export default store;