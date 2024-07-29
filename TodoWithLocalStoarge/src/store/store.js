import { configureStore} from '@reduxjs/toolkit'
import TodoSlice from '../feature/slice/Slice'
export const store = configureStore({
    reducer:{
        Todo : TodoSlice,
    },
});

