import { useNavigate } from 'react-router-dom';

import styles from './FormButtons.module.scss';

type TFormButtons = {
  onSave?: () => void;
  onCancel?: () => void;
  path?: string;
};

export const FormButtons = ({ onSave, onCancel, path }: TFormButtons) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    path ? navigate(path) : onCancel?.();
  };

  return (
    <div className={styles.buttons}>
      <button
        className="btn-contained"
        onClick={onSave}
      >
        Сохранить
      </button>
      <button
        className="btn-contained"
        onClick={handleCancel}
      >
        {path ? 'Назад' : 'Закрыть'}
      </button>
    </div>
  );
};
