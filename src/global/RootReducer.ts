import { configureStore } from "@reduxjs/toolkit";
import { CountryReducer } from "./CountrySlice";

export const Reducer = configureStore({
    reducer: {
        country: CountryReducer,
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;



