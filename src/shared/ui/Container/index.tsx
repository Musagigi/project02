import { ElementType, ReactNode } from 'react';

import styles from './Container.module.scss';

type TContainer = {
  children: ReactNode;
  component?: ElementType;
};

export const Container = ({
  children,
  component: Component = 'div',
}: TContainer) => {
  return <Component className={styles.container}>{children}</Component>;
};
