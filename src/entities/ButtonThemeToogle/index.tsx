import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { themeSelector } from 'app/store/selectors/themeSelector';
import { toogleTheme } from 'app/store/slices/themeSlice';

import { KEY_THEME } from 'shared/constans/localStorageKeys';

export const ButtonThemeToogle = () => {
  const theme = useAppSelector(themeSelector);
  const dispatch = useAppDispatch();

  const handleToogleButton = () => {
    const setTheme = theme === 'light' ? 'dark' : 'light';

    localStorage.setItem(KEY_THEME, setTheme);
    dispatch(toogleTheme(setTheme));
  };

  return (
    <button
      // className={}
      onClick={handleToogleButton}
    >
      THEME
    </button>
  );
};
