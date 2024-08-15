import { useState } from 'react';

export const useModalState = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => setIsOpen(true);
  const handleModalClose = () => setIsOpen(false);

  return { isOpen, handleModalOpen, handleModalClose };
};