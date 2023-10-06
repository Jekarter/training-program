import { cardObject } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  pectoral: boolean;
  spinal: boolean;
  shoulder: boolean;
  leg: boolean;
  arm: boolean;
  abdominal: boolean;
}

const initialState: FilterState = {
  pectoral: false,
  spinal: false,
  shoulder: false,
  leg: false,
  arm: false,
  abdominal: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    checkboxFilter: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case 'pectoral':
          state.pectoral = !state.pectoral;
        case 'spinal':
          state.spinal = !state.spinal;
        case 'shoulder':
          state.shoulder = !state.shoulder;
        case 'leg':
          state.leg = !state.leg;
        case 'arm':
          state.arm = !state.arm;
        case 'abdominal':
          state.abdominal = !state.abdominal;

          break;

        default:
          break;
      }
    },
  },
});

export const { checkboxFilter } = filterSlice.actions;
export default filterSlice.reducer;

/* 
interface exerciseState {
  exercises: cardObject[];
}

const initialState: exerciseState = {
  exercises: [],
};

export const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    radioFilter: (state, action: PayloadAction<cardObject>) => {},
  },
});

export default exercisesSlice.reducer;

*/
