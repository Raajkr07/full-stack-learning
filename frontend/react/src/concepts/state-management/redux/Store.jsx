import { configureStore } from "@reduxjs/toolkit";


const Store = () => configureStore({
    reducer: {
        counter: counterReducer,
    },
});