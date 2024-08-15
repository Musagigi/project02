import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'app/store/hooks';
import { setSelectedEmployee } from 'app/store/slices/selectedEmployeeSlice';
import type { TEmployee } from 'shared/types/employeeList';
import { ROUTES_MAP } from 'shared/constans/routing';

type TEmployeeListItem = {
  employee: TEmployee;
  className: string;
};

export const EmployeeListItem = ({
  employee,
  className,
}: TEmployeeListItem) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickItem = () => {
    dispatch(setSelectedEmployee(employee));
    navigate(ROUTES_MAP.editEmployee.path);
  };

  return (
    <tr
      className={className}
      onClick={handleClickItem}
    >
      <td>{employee.name}</td>
      <td>{employee.role}</td>
      <td>{employee.phone}</td>
      <td>{employee.birthday}</td>
    </tr>
  );
};
