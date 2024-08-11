import { TEmployee } from 'shared/types/employeeList';

export const getFilterEmployees = (
  employees: Array<TEmployee>,
  filterRole: string,
  filterArchive: boolean,
) => {
  return employees.filter((employee) => {
    if (filterRole && employee.role !== filterRole) return false;
    if (filterArchive && !employee.isArchive) return false;
    return true;
  });
};

export const getSortedEmployees = (
  employees: TEmployee[],
  sortOrder: { field: string; direction: string },
) => {
  const sortedEmployees = [...employees];

  switch (sortOrder.field) {
    case 'name':
      sortedEmployees.sort((a, b) => {
        if (sortOrder.direction === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      break;
    case 'birthday':
      sortedEmployees.sort((a, b) => {
        const dateA = new Date(a.birthday.split('.').reverse().join('-'));
        const dateB = new Date(b.birthday.split('.').reverse().join('-'));

        if (sortOrder.direction === 'asc') {
          return dateA.getTime() - dateB.getTime();
        } else {
          return dateB.getTime() - dateA.getTime();
        }
      });
      break;
  }

  return sortedEmployees;
};
