import { useNavigate } from 'react-router-dom';

import { FormEmployeeEdit } from 'features/FormEmployeeEdit';

import { useAppSelector } from 'app/store/hooks';
import { selectedEmployeeSelector } from 'app/store/selectors/selectedEmployeeSelector';
import { ROUTES_MAP } from 'shared/constans/routing';
import { useEffect } from 'react';

const EditEmployeePage = () => {
  const navigate = useNavigate();
  const employee = useAppSelector(selectedEmployeeSelector);

  useEffect(() => {
    if (employee === null) {
      navigate(ROUTES_MAP.main.path, { replace: true });
    }
  }, [employee]);

  return employee && <FormEmployeeEdit employee={employee} />;
};

export default EditEmployeePage;
