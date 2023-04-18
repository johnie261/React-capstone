import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './character/characterSlice';

const store = configureStore({
    reducer: {
        character: characterReducer,
    }
})

export default store;