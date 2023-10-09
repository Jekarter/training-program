import { FilterPlace, Place, cardObject } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  place: FilterPlace;
  pectoral: boolean;
  spinal: boolean;
  shoulder: boolean;
  leg: boolean;
  arm: boolean;
  abdominal: boolean;
}

const initialState: FilterState = {
  place: 'all',
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
    checkboxFilter: (state, action: PayloadAction<FilterState>) => {
      state.pectoral = action.payload.pectoral;
      state.spinal = action.payload.spinal;
      state.shoulder = action.payload.shoulder;
      state.leg = action.payload.leg;
      state.arm = action.payload.arm;
      state.abdominal = action.payload.abdominal;
    },
    radioFilter: (state, action: PayloadAction<FilterState>) => {
      state.place = action.payload.place;
    },
  },
});

export const { checkboxFilter, radioFilter } = filterSlice.actions;
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
