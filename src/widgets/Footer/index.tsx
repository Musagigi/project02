import { Container } from 'shared/ui/Container';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerTitle}>2024</div>
      </Container>
    </footer>
  );
};
