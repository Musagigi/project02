import { FormEvent, ReactNode, useState } from 'react';

import { Select } from 'features/Select';
import { ARCHIVED, ROLE } from 'shared/constans/common';
import { Checkbox } from 'shared/ui/Checkbox';

import { reverseDateToDMY } from 'shared/utils/reverseDateToDMY';

import { reverseDateToYMD } from 'shared/utils/reverseDateToYMD';

import type { TEmployee } from 'shared/types/employeeList';

import { formConfig, optionsCommon } from './config/formConfig';

import styles from './FormEmployeeEdit.module.scss';
import { ERROR_PHONE } from './lib/constans';
import { EmployeeInput } from './ui/EmployeeInput';

type TFormEmployeeEdit = {
  employee: TEmployee;
  buttons: ReactNode;
  onSubmitCallback: (data: TEmployee) => void;
};

export const FormEmployeeEdit = ({
  employee,
  buttons,
  onSubmitCallback,
}: TFormEmployeeEdit) => {
  const [error, setError] = useState('');

  const [role, setRole] = useState(employee.role);
  const [isArchive, setIsArchive] = useState(employee.isArchive);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(
      new FormData(event.target as HTMLFormElement),
    );

    setError(data.phone.toString().includes('_') ? ERROR_PHONE : '');

    if (!error) {
      onSubmitCallback({
        ...employee,
        ...data,
        birthday: reverseDateToDMY(data.birthday.toString()),
        role,
        isArchive,
      });
    }
  };

  return (
    <div className={styles.block}>
      <h1 className={styles.blockTitle}>Редактирование сотрудника</h1>
      <form
        className={styles.blockForm}
        onSubmit={onSubmit}
      >
        {formConfig.map((item) => (
          <EmployeeInput
            key={item.name}
            {...item}
            defaultValue={
              item.name === 'birthday'
                ? reverseDateToYMD(employee[item.name])
                : employee[item.name]
            }
            error={error}
            mask={item.mask}
            className={styles.blockFormField}
          />
        ))}

        <Select
          label={ROLE}
          options={optionsCommon}
          value={role}
          onChange={(event) => setRole(event.target.value)}
          className={styles.blockFormField}
        />

        <Checkbox
          label={ARCHIVED}
          checked={isArchive}
          onChange={(event) => setIsArchive(event.target.checked)}
          className={styles.blockFormField}
        />
        {buttons}
      </form>
    </div>
  );
};
