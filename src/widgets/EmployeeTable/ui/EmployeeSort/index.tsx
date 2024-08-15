import { TField, TSortOrder } from 'widgets/EmployeeTable/lib/types';
import { ButtonSorted } from '../ButtonSorted';

import { ASC, BIRTHDAY, DESC, NAME } from '../../lib/constans';

type TEmployeeSort = {
  sortOrder: TSortOrder;
  setSortOrder: (value: TSortOrder) => void;
};

export const EmployeeSort = ({ sortOrder, setSortOrder }: TEmployeeSort) => {
  const handleSortChange = (field: TField) => {
    const direction = sortOrder.direction === ASC ? DESC : ASC;
    setSortOrder({ field, direction });
  };

  return (
    <>
      <th>
        <ButtonSorted
          field={NAME}
          title="Имя"
          sortOrder={sortOrder}
          handleSortChange={handleSortChange}
        />
      </th>
      <th>
        <ButtonSorted
          field={BIRTHDAY}
          title="Дата рождения"
          sortOrder={sortOrder}
          handleSortChange={handleSortChange}
        />
      </th>
    </>
  );
};
