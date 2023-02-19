import { configureStore } from "@reduxjs/toolkit";

//alert msg
import msgReducer from '../Features/Alert/alertSlice'


// console.log(msgReducer,"msgReducer")
export default configureStore({
    
    reducer: {
        alertMessage: msgReducer,
    },

  });
  