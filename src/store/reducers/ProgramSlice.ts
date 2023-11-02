import { ExerciseCards, cardObject } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface inititalProgram {
  myProgram: ExerciseCards;
  pectoral: false;
  spinal: false;
  shoulder: false;
  leg: false;
  arm: false;
  abdominal: false;
}

const initialState: ExerciseCards = [];

export const ProgramSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
    addExerciseToProgram: (state, action: PayloadAction<cardObject>) => {
      const existingIndex = state.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (existingIndex !== -1) {
        state.splice(existingIndex, 1);
      } else {
        state.push(action.payload);
      }
    },
    deleteExerciseFromProgram: (state, action: PayloadAction<cardObject>) => {
      const existingIndex = state.findIndex(
        (item) => item.id === action.payload.id,
      );

      state.splice(existingIndex, 1);
    },
  },
});

export const { addExerciseToProgram, deleteExerciseFromProgram } =
  ProgramSlice.actions;
export default ProgramSlice.reducer;
