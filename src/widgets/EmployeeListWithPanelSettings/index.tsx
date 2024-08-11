import { useState } from 'react';

import { Select } from 'features/Select';
import { Checkbox } from 'shared/ui/Checkbox';
import { EmployeeListItem } from './ui/EmployeeListItem';

import { employeesListSelector } from 'app/store/selectors/employeesListSelector';
import { useAppSelector } from 'app/store/hooks';
import { getFilterEmployees, getSortedEmployees } from './lib/utils';
import { ARCHIVED, ROLE } from 'shared/constans/common';
import { optionsWithOptionAll } from './lib/constans';
import styles from './EmployeeListWithPanelSettings.module.scss';

export const EmployeeListWithPanelSettings = () => {
  const employees = useAppSelector(employeesListSelector);

  const [sortOrder, setSortOrder] = useState({
    field: 'name',
    direction: 'asc',
  });
  const [filterRole, setFilterRole] = useState('');
  const [filterArchive, setFilterArchive] = useState(false);

  const handleSortChange = (field: string) => {
    const direction = sortOrder.direction === 'asc' ? 'desc' : 'asc';
    setSortOrder({ field, direction });
  };

  const filteredEmployees = getFilterEmployees(
    employees,
    filterRole,
    filterArchive,
  );

  const sortedEmployeesList = getSortedEmployees(filteredEmployees, sortOrder);

  return employees.length > 0 ? (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>Список сотрудников</h2>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableHeadItems}>
            <th>
              <Select
                label={ROLE}
                value={filterRole}
                onChange={(event) => setFilterRole(event.target.value)}
                options={optionsWithOptionAll}
              />
            </th>
            <th>
              <Checkbox
                label={ARCHIVED}
                checked={filterArchive}
                onChange={(event) => setFilterArchive(event.target.checked)}
              />
            </th>
          </tr>
          <tr className={styles.tableHeadItems}>
            <th>
              <button onClick={() => handleSortChange('name')}>Имя</button>
              {sortOrder.field === 'name' && sortOrder.direction === 'asc'
                ? '↑'
                : '↓'}
            </th>
            <th>
              <button onClick={() => handleSortChange('birthday')}>
                Дата рождения
              </button>
              {sortOrder.field === 'birthday' && sortOrder.direction === 'asc'
                ? '↑'
                : '↓'}
            </th>
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
    </div>
  ) : (
    <h2>Список сотрудников пуст</h2>
  );
};
