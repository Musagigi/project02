import { useMemo, useState } from 'react';

import { EmployeeListItem } from './ui/EmployeeListItem';
import { EmployeeFilters } from './ui/EmployeeFilters';
import { EmployeeSort } from './ui/EmployeeSort';
import { Dialog } from 'features/Dialog';

import type { TSortOrder } from './lib/types';
import type { TEmployee } from 'shared/types/employeeList';
import { employeesListSelector } from 'app/store/selectors/employeesListSelector';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  getEmptyObject,
  getFilterEmployees,
  getSortedEmployees,
} from './lib/utils';
import { useModalState } from 'shared/hooks/useModalState';
import { FormEmployeeEdit } from 'features/FormEmployeeEdit';
import { FormButtons } from 'shared/ui/buttons/FormButtons';
import { addEmployeeToList } from 'app/store/slices/employeesListSlice';
import { ASC, EMPLOYEE_LIST, EMPTY_EMPLOYEE_LIST, NAME } from './lib/constans';
import styles from './EmployeeTable.module.scss';

export const EmployeeTable = () => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(employeesListSelector);

  const [filterRole, setFilterRole] = useState('');
  const [filterArchive, setFilterArchive] = useState(false);
  const [sortOrder, setSortOrder] = useState<TSortOrder>({
    field: NAME,
    direction: ASC,
  });

  const { isOpen, handleModalOpen, handleModalClose } = useModalState();

  const sortedEmployeesList = getSortedEmployees(
    getFilterEmployees(employees, filterRole, filterArchive),
    sortOrder,
  );

  const emptyEmployee = useMemo(() => {
    if (employees && employees.length > 0) {
      return getEmptyObject(employees[0], employees);
    }
  }, [employees]);

  const handleAddEmployee = (data: TEmployee) => {
    dispatch(addEmployeeToList(data));
    handleModalClose();
  };

  return employees.length > 0 ? (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{EMPLOYEE_LIST}</h2>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableHeadItems}>
            <EmployeeFilters
              filterRole={filterRole}
              filterArchive={filterArchive}
              setFilterRole={setFilterRole}
              setFilterArchive={setFilterArchive}
            />
          </tr>
          <tr className={styles.tableHeadItems}>
            <EmployeeSort
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {sortedEmployeesList.map((employee) => (
            <EmployeeListItem
              key={employee.id}
              className={styles.tableBodyItems}
              employee={employee}
            />
          ))}
        </tbody>
      </table>
      <button
        className="btn-contained"
        onClick={handleModalOpen}
      >
        Добавить сотрудника
      </button>

      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={handleModalClose}
        >
          {emptyEmployee && (
            <FormEmployeeEdit
              employee={emptyEmployee}
              buttons={<FormButtons onCancel={handleModalClose} />}
              onSubmitCallback={handleAddEmployee}
            />
          )}
        </Dialog>
      )}
    </div>
  ) : (
    <h2>{EMPTY_EMPLOYEE_LIST}</h2>
  );
};
