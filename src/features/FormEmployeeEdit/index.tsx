import { ChangeEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FieldInput } from './ui/FieldInput';
import { Checkbox } from 'shared/ui/Checkbox';
import { Select } from 'features/Select';

import { useAppDispatch } from 'app/store/hooks';
import { editEmployeesList } from 'app/store/slices/employeesListSlice';
import type { TEmployee } from 'shared/types/employeeList';
import { ARCHIVED, ROLE } from 'shared/constans/common';
import { ROUTES_MAP } from 'shared/constans/routing';
import { ERROR_NAME, ERROR_PHONE, optionsCommon } from './lib/constans';
import styles from './FormEmployeeEdit.module.scss';

export const FormEmployeeEdit = ({
  employee,
}: Record<'employee', TEmployee>) => {
  const navigate = useNavigate();

  const [name, setName] = useState(employee.name);
  const [nameError, setNameError] = useState(false);

  const [phone, setPhone] = useState(employee.phone);
  const [phoneError, setPhoneError] = useState(false);

  const [birthday, setBirthday] = useState(employee.birthday);

  const [role, setRole] = useState(employee.role);
  const [isArchive, setIsArchive] = useState(employee.isArchive);

  const dispatch = useAppDispatch();

  const handleSave = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(
      editEmployeesList({
        ...employee,
        name,
        phone,
        birthday,
        role,
        isArchive,
      }),
    );
  };

  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
    setNameError(value.length > 1 ? false : true);
  };

  const handlePhone = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPhone(value);
    setPhoneError(value.length > 10 ? false : true);
  };

  const handleBirthday = (event: ChangeEvent<HTMLInputElement>) => {
    setBirthday(event.target.value);
  };

  return (
    <div>
      <h1 className={styles.title}>Редактирование сотрудника</h1>
      <form className={styles.form}>
        <FieldInput
          label="Имя"
          minLength={1}
          value={name}
          required
          error={nameError}
          errorText={ERROR_NAME}
          onChange={handleName}
        />

        <FieldInput
          label="Телефон"
          type="tel"
          minLength={11}
          value={phone}
          required
          error={phoneError}
          errorText={ERROR_PHONE}
          onChange={handlePhone}
        />

        <FieldInput
          label="Дата рождения"
          type="date"
          value={birthday}
          required
          onChange={handleBirthday}
        />
        <fieldset className={styles.formField}>
          <Select
            label={ROLE}
            options={optionsCommon}
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
        </fieldset>
        <fieldset className={styles.formField}>
          <Checkbox
            label={ARCHIVED}
            checked={isArchive}
            onChange={(event) => setIsArchive(event.target.checked)}
          />
        </fieldset>
        <button
          className="btn-contained"
          onClick={handleSave}
          disabled={nameError || phoneError}
        >
          Сохранить
        </button>
        <button
          className="btn-contained"
          onClick={(event) => {
            event.preventDefault();
            navigate(ROUTES_MAP.main.path);
          }}
        >
          Назад
        </button>
      </form>
    </div>
  );
};
