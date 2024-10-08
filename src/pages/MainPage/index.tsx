import { useEffect } from 'react';

import { EmployeeTable } from 'widgets/EmployeeTable';

import { useAppDispatch } from 'app/store/hooks';
import { setEmployeesList } from 'app/store/slices/employeesListSlice';
import { KEY_EMPLOYEES } from 'shared/constans/common';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedEmployees = localStorage.getItem(KEY_EMPLOYEES);
    if (storedEmployees) {
      dispatch(setEmployeesList(JSON.parse(storedEmployees)));
    } else {
      fetch('employees.json')
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem(KEY_EMPLOYEES, JSON.stringify(data));
          dispatch(setEmployeesList(data));
        });
    }
  }, []);

  return (
    <div className={styles.main}>
      <EmployeeTable />
    </div>
  );
};
