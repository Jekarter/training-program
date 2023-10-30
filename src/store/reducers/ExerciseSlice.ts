import { Group, Place, cardObject } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  place: Place;
  muscleGroups: Group[];
}

const initialState: FilterState = {
  place: 'all',
  muscleGroups: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    checkboxFilter: (state, action: PayloadAction<FilterState>) => {
      state.muscleGroups = action.payload.muscleGroups;
    },
    radioFilter: (state, action: PayloadAction<FilterState>) => {
      state.place = action.payload.place;
    },
  },
});

export const { checkboxFilter, radioFilter } = filterSlice.actions;
export default filterSlice.reducer;
