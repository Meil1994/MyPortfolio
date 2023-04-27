import { AiFillGithub } from 'react-icons/ai'; 
import { BsFacebook } from 'react-icons/bs'; 
import { FiLinkedin } from 'react-icons/fi'; 
import { SiIndeed } from 'react-icons/si'; 

const Social = () => {
  return (
    <div className='text-2xl black:text-slate-300 position: fixed mt-80 ml-3 hidden lg1:block'>
      <a href='https://github.com/Meil1994' target='blank'><AiFillGithub className='mb-5 mt-5 hover:text-green-900 dark:hover:text-green-300'/></a>
      <a href='https://www.facebook.com/profile.php?id=100081302417501' target='blank'><BsFacebook className='mb-5 hover:text-green-900 dark:hover:text-green-300'/></a>
      <a href='https://www.linkedin.com/in/meilchu-cabaluna-003163256' target='blank'><FiLinkedin className='mb-5 hover:text-green-900 dark:hover:text-green-300'/></a>
      <div className="border-l border-black dark:border-slate-300 h-60 ml-3"></div> 

    </div>
  )
}

export default Social