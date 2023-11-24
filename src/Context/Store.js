import { configureStore } from '@reduxjs/toolkit'
import infoSlice  from './Slice/Reducer'
export const store = configureStore({
    reducer: {
      formSchema:infoSlice,
    },
});