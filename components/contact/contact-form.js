import classes from './contact-form.module.css';
import { useState, useEffect } from 'react';
import Notification from '../ui/notification';
import Footer from '../layout/footer';

async function sendContactData(contactDetails){ 

  const response = await fetch('/api/contact',{
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

export default function ContactForm(){
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const [requestStatus, setrequestStatus] = useState(); // 'pending' 'success' 'error'
  const [requestError, setrequestError] = useState(); 

  useEffect(()=>{
    if(requestStatus === 'pending' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setrequestStatus(null);
        setrequestError(null);
      }, 1000)
      return () => clearTimeout(timer);
    }
    
  }, [requestStatus])

  async function sendMessageHandler(event){
    event.preventDefault();
    
    // add client-side validation 

    const mes = {
      email: email,
      name: name,
      message: message,
    }
    setrequestStatus('pending');
    try{
      await sendContactData(mes)
      setrequestStatus('success');
      setEmail('');
      setName('');
      setMessage('');
    } catch (error){
      setrequestError(error.message);
      setrequestStatus('error');
    }
  } 

  let notification;

  if (requestStatus === 'pending'){
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way',
    }
  }

  if(requestStatus === 'success'){
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    } 
  }

  if(requestStatus === 'error'){
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    } 
  }

  return (
    <section className={classes.contact}>
      <h1>這頁阿味好 不要亂打字 <br/>不然你只會收到error</h1>
      <form className={classes.form} onSubmit ={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor = 'email'>Your Email</label>
            <input 
              type = 'email' 
              id = 'email' 
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor = 'name'>Your name</label>
            <input 
              type = 'text'  
              id = 'name' 
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor = 'message'>Your Mesage</label>
          <textarea 
            id = 'message' 
            rows = "5" 
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}>
            </textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      
      {notification && (
        <Notification 
          status = {notification.status}
          title = {notification.title}
          message = {notification.message}
        />)}
    </section>
  )
}