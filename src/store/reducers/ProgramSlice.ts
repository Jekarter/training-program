import { ExerciseCards } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ProgramState {
  myProgram: ExerciseCards;
  countPrograms: number;
}

const initialState: ProgramState = {
  myProgram: [],
  countPrograms: 0,
};

export const ProgramSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
    addExerciseToProgram: (state, action: PayloadAction<ProgramState>) => {
      state.myProgram = action.payload.myProgram;
      state.countPrograms = action.payload.myProgram.length;
    },
  },
});

export const { addExerciseToProgram } = ProgramSlice.actions;
export default ProgramSlice.reducer;
