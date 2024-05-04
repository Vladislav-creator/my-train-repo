import React, { useState} from 'react';
import Modal1 from '../../components/Modal1/Modal1.jsx';
import css from './Home.module.css';
import GoogleMap from '../../components/GoogleMap/GoogleMap.jsx'; // Добавлен импорт GoogleMap
import Photo1 from '../../Images/mersedesA.jpg';

  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // console.log(isMenuOpen)
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // useEffect(() => {
  //   const body = document.body;

  //   const handleTouchMove = (e) => {
  //     if (isMenuOpen) {
  //       e.preventDefault();
  //     }
  //   };

  //   if (isMenuOpen) {
  //     body.classList.add('no-scroll');
  //     body.addEventListener('touchmove', handleTouchMove, { passive: false });
  //   } else {
  //     body.classList.remove('no-scroll');
  //     body.removeEventListener('touchmove', handleTouchMove);
  //   }

  //   return () => {
  //     body.removeEventListener('touchmove', handleTouchMove);
  //   };
  // }, [isMenuOpen]);
  const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className="container">
      <h1>Home</h1>
      <GoogleMap />
     
      <button className={css.openBtn} onClick={()=>setIsModalOpen(true)}>Open Modal</button>
      <Modal1 active={isModalOpen} setActive={setIsModalOpen}>
      <div className={css.photo}>
         <img src={Photo1} alt='rent-car1' width='100%'/>
         </div>
         <div className={css.photo}>
         <img src={Photo1} alt='rent-car1' width='100%'/>
         </div>
         <div className={css.photo}>
         <img src={Photo1} alt='rent-car1' width='100%'/>
         </div>
      </Modal1>
    </div>
  );
};

export default Home;