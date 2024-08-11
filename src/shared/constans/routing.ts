export type TRoute = {
  path: string;
  name: String;
};

export const ROUTES_MAP = {
  main: {
    path: '/',
    name: 'Главная',
  },

  editEmployee: {
    path: 'edit-employee',
    name: 'Редактировать сотрудника',
  },

  about: {
    path: 'about',
    name: 'О сайте',
  },
};
