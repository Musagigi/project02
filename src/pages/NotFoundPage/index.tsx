import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>404</h2>
      <p>Страница, которую вы запрашиваете, не существует</p>
    </div>
  );
};
