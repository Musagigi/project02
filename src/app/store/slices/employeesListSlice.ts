import { createSlice } from '@reduxjs/toolkit';

import { KEY_EMPLOYEES } from 'shared/constans/localStorageKeys';

import type { TEmployee } from 'shared/types/employeeList';

type TEmployeesList = {
  employees: Array<TEmployee>;
};

const initialState: TEmployeesList = {
  employees: [],
};

const employeesListSlice = createSlice({
  name: 'employeesList',
  initialState,
  reducers: {
    setEmployeesList(state, action) {
      state.employees = action.payload;
    },
    editEmployeesList(state, action) {
      const newEmployees = state.employees.map((employee) => {
        if (employee.id === action.payload.id) {
          return { ...employee, ...action.payload };
        }

        return employee;
      });

      state.employees = newEmployees;
      localStorage.setItem(KEY_EMPLOYEES, JSON.stringify(newEmployees));
    },
    addEmployeeToList(state, action) {
      state.employees.push(action.payload);
      localStorage.setItem(KEY_EMPLOYEES, JSON.stringify(state.employees));
    },
  },
});

export const { setEmployeesList, editEmployeesList, addEmployeeToList } =
  employeesListSlice.actions;
export default employeesListSlice.reducer;
