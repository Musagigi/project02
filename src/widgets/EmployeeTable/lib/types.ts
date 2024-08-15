export type TField = 'name' | 'birthday';

export type TSortOrder = {
  field: TField;
  direction: 'asc' | 'desc';
};
