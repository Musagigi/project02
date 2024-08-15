import { useRef, ReactNode, useEffect } from 'react';

import styles from './Dialog.module.scss';

export type TDialog = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

export const Dialog = ({ children, onClose }: TDialog) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    dialogRef.current?.showModal();

    dialogRef.current?.addEventListener('keydown', handleKeyDown);

    return () => {
      dialogRef.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label="Добавить сотрудника"
      className={styles.dialog}
    >
      <div className={styles.dialogContainer}>{children}</div>
    </dialog>
  );
};
