import { InputHTMLAttributes } from 'react';

export type TInitialState = {
  name: string;
  phone: string;
  birthday: string;
};

type TFormConfig = Array<
  {
    name: keyof TInitialState;
    errorText?: string;
    label?: string;
    mask?: string;
    afterMount?: (input: HTMLInputElement) => void;
  } & InputHTMLAttributes<HTMLInputElement>
>;

export const formConfig: TFormConfig = [
  {
    name: 'name',
    label: 'Имя',
    required: true,
    type: 'text',
    minLength: 2,
  },
  {
    name: 'phone',
    label: 'Телефон',
    required: true,
    type: 'tel',
    mask: '+7 (999) 999-99-99',
    placeholder: '+7 (___) ___-__-__',
    errorText: 'Поле обязательно к заполнению',
  },
  {
    name: 'birthday',
    label: 'Дата рождения',
    required: true,
    type: 'date',
  },
];

export const optionsCommon = [
  { value: 'cook', label: 'Повар' },
  { value: 'waiter', label: 'Официант' },
  { value: 'driver', label: 'Водитель' },
];
