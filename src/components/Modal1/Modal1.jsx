import React, {  useEffect } from 'react';
import css from './Modal1.module.css';

const Modal1 = ({ active, setActive, children }) => {
  useEffect(() => {
    const body = document.body;
    if (active) {
      body.style.overflow = 'hidden'; // Убираем скролл при открытом модальном окне
    } else {
      body.style.overflow = 'auto'; // Возвращаем скролл при закрытом модальном окне
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActive(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
      body.style.overflow = 'auto'; // Убеждаемся, что скролл возвращается при размонтировании компонента
    };
  }, [active,setActive]);

  return (
    <div className={`${css.hystModal} ${active ? css.open : ''}`} onClick={() => setActive(false)}>
      <div className={css.hystmodalWrap}>
      <div className={css.hystmodalWindow} onClick={e => e.stopPropagation()}>
      <button data-hystclose className={css.hystmodalClose} onClick={() => setActive(false)}></button>
      {children}
      </div>
      </div>
    </div>
  );
};

export default Modal1;
