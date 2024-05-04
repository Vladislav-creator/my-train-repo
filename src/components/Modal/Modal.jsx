import React, { useState } from 'react';
import Modal from 'react-modal';
import css from './Modal.module.css';

// Стили для модального окна
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto',
  },
};

// Компонент модального окна
const MyModal = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Открыть модальное окно</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        ariaHideApp={false}
        className={css.reactModal}
        overlayClassName={css.reactModalOverlay}
        contentLabel="Модальное окно"
      >
        <div className={css.reactModalContent}>
          <button className={css.reactModalCloseButton} onClick={() => setModalIsOpen(false)}>
          </button>
          {children}
        </div>
      </Modal>
    </div>
  );
};

export default MyModal;