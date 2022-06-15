import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//initialized the state which is to be used by multiple components
const initialState = {
  val: 5,
};

//asyncThunk is used to create async functions
export const asyncSquare = createAsyncThunk(
  "mathops/asyncSquare",
  async (val) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: val * val });
      }, 3000);
    });
    return response.data;
  }
);

//IMP - create slice creates reducers (functions which can manipulate states)
export const MathOpsSlice = createSlice({
  name: "mathops",
  initialState,
  reducers: {
    incrementVal: (state) => {
      state.val += 1;
    },

    decrementVal: (state) => {
      state.val -= 1;
    },

    squareVal: (state) => {
      state.val *= state.val;
      },
    
    squareRootVal: (state) => {
        state.val = Math.sqrt(state.val)
      },
    },
  // used in conjuction with asyncThunk, in this case, update state value when asyncSquare's promise is fullfilled
  extraReducers: (builder) => {
    builder.addCase(asyncSquare.fulfilled, (state, action) => {
      state.val = action.payload;
    });
  },
});

//Q - more concise way ?
export const {incrementVal,decrementVal,squareRootVal,squareVal} = MathOpsSlice.actions;

export default MathOpsSlice.reducer;
