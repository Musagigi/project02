import { configureStore } from '@reduxjs/toolkit';

import employeesListReducer from './slices/employeesListSlice';
import selectedEmployeeReducer from './slices/selectedEmployeeSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    employeesList: employeesListReducer,
    selectedEmployee: selectedEmployeeReducer,
    themeSlice: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
