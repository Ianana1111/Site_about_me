/* eslint-disable react/prop-types */
import classes from './Modal.module.css'
import { useRouter } from 'next/navigation'

export default function Modal({ children }) {
  
  const router = useRouter()
  
  function closeHandler() {
    router.push("/bulletins")
  }
  
  return (
  <>
    <div className={classes.backdrop} onClick={closeHandler}/>
    <dialog open className={classes.modal}>
      {children}
    </dialog>
  </> 
  );
}
