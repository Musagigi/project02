import { createSlice } from '@reduxjs/toolkit';

import { TEmployee } from 'shared/types/employeeList';

type TSelectedEmployee = {
  selectedEmployee: TEmployee | null;
};

const initialState: TSelectedEmployee = {
  selectedEmployee: null,
};

const selectedEmployeeSlice = createSlice({
  name: 'selectedEmployee',
  initialState,
  reducers: {
    setSelectedEmployee(state, action) {
      state.selectedEmployee = action.payload;
    },
  },
});

export const { setSelectedEmployee } = selectedEmployeeSlice.actions;
export default selectedEmployeeSlice.reducer;
