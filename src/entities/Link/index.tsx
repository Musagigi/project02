import { NavLink } from 'react-router-dom';

import { Button } from 'shared/ui/buttons';

import type { ReactNode } from 'react';

type TLink = {
  to: string;
  children: ReactNode;
};

export const Link = ({ children, to }: TLink) => {
  return <Button tag={}>test3</Button>;
};
