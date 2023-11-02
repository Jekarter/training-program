import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from './reducers/ExerciseSlice';
import programReducer from './reducers/ProgramSlice';

export const store = configureStore({
  reducer: {
    exercises: exercisesReducer,
    program: programReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
