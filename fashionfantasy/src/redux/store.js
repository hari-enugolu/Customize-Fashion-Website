import { configureStore } from "@reduxjs/toolkit";

import BagReducer from "./features/bagSlice";
import ShoeReducer from "./features/shoeSlice";

export default configureStore({
  reducer: {
    bag: BagReducer,
    shoe: ShoeReducer,
  },
});
