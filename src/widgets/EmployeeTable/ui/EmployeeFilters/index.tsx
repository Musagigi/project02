import { Select } from 'features/Select';
import { Checkbox } from 'shared/ui/Checkbox';

import { ARCHIVED, ROLE } from 'shared/constans/common';
import { optionsWithOptionAll } from '../../config/optionsToTable';

type TEmployeeFilters = {
  filterRole: string;
  filterArchive: boolean;
  setFilterRole: (value: string) => void;
  setFilterArchive: (value: boolean) => void;
};

export const EmployeeFilters = ({
  filterRole,
  filterArchive,
  setFilterRole,
  setFilterArchive,
}: TEmployeeFilters) => {
  return (
    <>
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
    </>
  );
};
