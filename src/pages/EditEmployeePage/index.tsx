import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormEmployeeEdit } from 'features/FormEmployeeEdit';
import { FormButtons } from 'shared/ui/buttons/FormButtons';

import type { TEmployee } from 'shared/types/employeeList';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { selectedEmployeeSelector } from 'app/store/selectors/selectedEmployeeSelector';
import { editEmployeesList } from 'app/store/slices/employeesListSlice';
import { ROUTES_MAP } from 'shared/constans/routing';

const EditEmployeePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const employee = useAppSelector(selectedEmployeeSelector);

  useEffect(() => {
    if (employee === null) {
      navigate(ROUTES_MAP.main.path, { replace: true });
    }
  }, [employee]);

  const handleEditEmployee = (data: TEmployee) => {
    dispatch(editEmployeesList(data));
  };

  return (
    employee && (
      <FormEmployeeEdit
        employee={employee}
        buttons={<FormButtons path={ROUTES_MAP.main.path} />}
        onSubmitCallback={handleEditEmployee}
      />
    )
  );
};

export default EditEmployeePage;
