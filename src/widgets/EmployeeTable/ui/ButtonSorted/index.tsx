import type { TField, TSortOrder } from '../../lib/types';
import { ASC } from '../../lib/constans';

type TButtonSorted = {
  field: TField;
  title: string;
  sortOrder: TSortOrder;
  handleSortChange: (field: TField) => void;
};

export const ButtonSorted = ({
  field,
  title,
  sortOrder,
  handleSortChange,
}: TButtonSorted) => {
  const isAscending = sortOrder.field === field && sortOrder.direction === ASC;

  return (
    <>
      <button onClick={() => handleSortChange(field)}>{title}</button>
      {isAscending ? '↑' : '↓'}
    </>
  );
};
