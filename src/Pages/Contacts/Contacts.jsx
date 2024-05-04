import MyModal from '../../components/Modal/Modal.jsx';
import Photo1 from '../../Images/mersedesA.jpg';
import css from './Contacts.module.css';
const  Contacts = () => {
    return (
        <div className="container">
<h1>Contacts</h1>
   <MyModal>
        <p>Содержимое модального </p>
        <div className={css.photo}>
         <img src={Photo1} alt='rent-car1' width='100%'/>
         </div>
         <div className={css.photo}>
         <img src={Photo1} alt='rent-car1' width='100%'/>
         </div>
         <div className={css.photo}>
         <img src={Photo1} alt='rent-car1' width='100%'/>
         </div>
      </MyModal>
</div>
    )
    
};
export default Contacts;