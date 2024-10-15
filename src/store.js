import { configureStore } from "@reduxjs/toolkit";
import rootred from "./redux/reducer/main";

const store = configureStore(
    {
        reducer: rootred
    }
);

export default store;