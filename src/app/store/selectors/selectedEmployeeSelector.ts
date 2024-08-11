import { RootState } from '../store';

export const selectedEmployeeSelector = (state: RootState) =>
  state.selectedEmployee.selectedEmployee;
