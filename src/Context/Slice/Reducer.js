import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  formTitle: '',
  formField:[],
}

export const infoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateFormField: (state, action) => {
      state.formField.push(action.payload);
      console.log(state.formField[0]);
    },
    updateFormTitle: (state, action) => {
      state.formTitle = action.payload;
    },
    removeFormField:(state, action)=>{
      state.formField = state.formField.filter(item => item.id !== action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateFormField , updateFormTitle,removeFormField } = infoSlice.actions

export default infoSlice.reducer 