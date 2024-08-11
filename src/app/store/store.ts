import { configureStore } from '@reduxjs/toolkit';

import employeesListReducer from './slices/employeesListSlice';
import selectedEmployeeReducer from './slices/selectedEmployeeSlice';

export const store = configureStore({
  reducer: {
    employeesList: employeesListReducer,
    selectedEmployee: selectedEmployeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
