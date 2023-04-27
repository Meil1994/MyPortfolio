import { AiFillGithub } from 'react-icons/ai'; 
import { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({__html:""});
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (successMessage) {
      const timeoutId = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [successMessage]);


  const onSubmit = async (e) => {
    e.preventDefault();
    setError({});
    setSuccessMessage('');

    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
       axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;    
      const response = await axios.post('http://127.0.0.1:8000/messages', {
        email,
        message
      });
      console.log(response.data);
      setEmail('');
      setMessage('');
      setSuccessMessage(response.data.message);
      
    } catch (error) {
      setError('An error occurred while sending your message.');
    }
  };

  return (
    <div className="text-center pb-0 pt-20 sm3:p-20 sm3:pb-0 sm3:pt-20 lg1:p-40 lg1:pb-0 lg1:pt-20 tracking-wider">
      
      <p className="text-4xl"><span className="text-green-900 dark:text-green-400 text-2xl">04. </span>Contact...</p>
      <p className="mt-10 text-lg font-thin lg1:p-10 lg1:pt-0 lg1:pb-0">
        " Getting in touch with others is not only a way to connect, 
        but a way to discover new perspectives, broaden our horizons, 
        and ultimately, enrich our lives. "
      </p>
      <p className="mt-10 text-lg lg1:p-10 lg1:pt-0 lg1:pb-0">
        Currently, I am looking for a web developer job. 
        If you feel that I am a suitable candidate, please do not hesitate to reach out to me. 
        I would be happy to discuss my qualifications and experience further with you.
      </p>
      
      <p className="mt-10 text-sm">Email: <span className="underline underline-offset-4 text-green-900 dark:text-green-300">meilchucabaluna1994@gmail.com</span></p>
      <a href='https://meilchucabaluna.net/' target='blank' className='text-sm'>Website: <span className="underline underline-offset-4 text-green-900 dark:text-green-300">www.meilchucabaluna.net</span></a>
      <p className='text-sm'>Phone: <span className="underline underline-offset-4 text-green-900 dark:text-green-300">09369361714</span></p>

      {successMessage && <p className='w-50 shadow-2xl shadow-black fixed top-0 transform-translate-x-1/2 z-40 mt-10 rounded-lg dark:text-slate-700 p-10 bg-teal-500'>
      {successMessage}</p>}

      <div className="mt-10">
        <p className="font-light text-sm">Alternatively, you can drop a message here.</p>

          <form onSubmit={onSubmit} className="text-black">
            <input 
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
              placeholder="Your Email"
              className="border border-slate-600 w-60 sm1:w-80 p-2 rounded-lg mt-2"
            />
            <br/>
            <textarea 
              id="message"
              placeholder='Message'
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              
              className="w-60 sm1:w-80 rounded-lg mt-2 p-2 h-40 border border-slate-600"
            >
            </textarea>
            <br/>
            <button type='submit' className='border mt-5 border-green-800 pt-2 pb-2 w-60 sm1:w-80 rounded-lg text-green-800 hover:border-green-600 hover:text-green-600 dark:border-green-400 dark:text-green-400 dark:hover:border-green-200 dark:hover:text-green-200'>Send</button>
          </form>
        
      </div>
      <p className='mt-20 text-sm'>Designed and Created by Meilchu Cabaluna. Source code here <button className='dark:text-green-300 text-green-900'><AiFillGithub className='ml-1 text-2xl'/></button></p>
    </div>
  )
}

export default Contact