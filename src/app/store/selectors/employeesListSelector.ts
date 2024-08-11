import { RootState } from '../store';

export const employeesListSelector = (state: RootState) =>
  state.employeesList.employees;
