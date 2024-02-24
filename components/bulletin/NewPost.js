import Modal from '../model/Modal';
import classes from './NewPost.module.css';
import { useRef } from 'react'; 
// 這裡的 Form 可以處理當準備要submit 他會垂到main.jsx裡的action並執行 
import Link from 'next/link';
import { useRouter } from 'next/navigation'

async function sendContactData(contactDetails){ 
  console.log(contactDetails);
  
  const response = await fetch('/api/bulletin',{
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if(!response.ok){
    throw new Error(data.message || 'Something went wrong!')
  }
}

export default function NewPost() {  
  const textRef = useRef();
  const authorRef = useRef();
  const router = useRouter();

  async function sendMessageHandler(event){
    event.preventDefault();
    const text = textRef.current.value;
    const author = authorRef.current.value;

    const mes = {
      author: author,
      body: text,
    }

    try{
      await sendContactData(mes)
    } catch (error){
      console.log(error);
    }
    router.push("/bulletins")
  }

  return (
    <Modal>
    <form className={classes.form} onSubmit = {sendMessageHandler}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name = "author" required ref = {authorRef}/>
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" name = "body"required rows={3} ref = {textRef}/>
      </p>
      <p className={classes.actions}>
        <Link href = '/bulletins' type='button' >Cancel</Link>
        <button>Submit</button>
      </p>
    </form>
    </Modal>
  );
}

// // data.request.formData
// export async function action({request}){
//   const formData = await request.formData();
//   const postData = Object.fromEntries(formData);
//   await fetch('http://localhost:8080/posts', {
//     method: 'POST',
//     body: JSON.stringify(postData),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return redirect('/');
// }