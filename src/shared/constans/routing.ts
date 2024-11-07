export type TRoute = {
  path: string;
  name: string;
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
