import { configureStore } from "@reduxjs/toolkit";
// import matrixSlice from "./features/matrix";
import switchSlice from "./features/switchSlice";

export const store = configureStore({
    reducer: {
     switches: switchSlice ,
    },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;