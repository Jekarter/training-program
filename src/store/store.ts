import { combineReducers, configureStore } from '@reduxjs/toolkit';
import exercisesReducer from './reducers/ExerciseSlice';
import programReducer from './reducers/ProgramSlice';

const rootReducer = combineReducers({
  exercises: exercisesReducer,
  program: programReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
